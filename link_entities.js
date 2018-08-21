// @flow

/* eslint-disable */

const contentful = require('contentful-management');
const fs = require('fs');
const _ = require('lodash');

const client = contentful.createClient({
  accessToken:
    'CFPAT-cb28f221a4be9802ce295a86a6bbad00a597c2a7fea1c5ce27c0ca210127837b',
});

const addToMap = (map, key, value) => {
  if (!map[key]) {
    map[key] = [value];
  } else {
    if (!map[key].includes(value)) {
      map[key].push(value);
    }
  }
};

const fetchPrintMap = async map => {
  await Promise.all(Object.keys(map).map(() => {}));
};

type NodeTypesT = 'Space' | 'Link';
type LinkTypesT = 'User' | 'Asset' | 'Entry';

type SpaceT = {
  name: string,
  sys: {
    type: NodeTypesT,
    id: string,
    version: number,
    createdBy: {
      sys: {
        type: NodeTypesT,
        linkType: LinkTypesT,
        id: string,
      },
    },
    createdAt: string,
    updatedBy: {
      sys: {
        type: NodeTypesT,
        linkType: LinkTypesT,
        id: string,
      },
    },
    updatedAt: string,
  },
  getEntries: Function,
  getEntry: Function,
};

const test = [];
const reverseMap = map => {
  const res = {};
  Object.keys(map).forEach(key => {
    map[key].forEach(val => {
      addToMap(res, val, key);
    });
  });

  return res;
};

type PersonEntryT = {
  update: Function,
  fields: {
    name: {
      ru: string,
    },
    lastname: {
      ru: string,
    },
    twitter: {
      ru: string,
    },
    slack: {
      ru: string,
    },
    photo: {
      ru: {
        sys: {
          type: NodeTypesT,
          linkType: LinkTypesT,
          id: string,
        },
      },
    },
    podcasts: {
      ru: [
        {
          sys: {
            type: NodeTypesT,
            linkType: LinkTypesT,
            id: string,
          },
        },
      ],
    },
    slug: {
      ru: string,
    },
  },
  sys: any,
};
type EntriesT = {
  sys: any,
  total: any,
  skip: any,
  limit: any,
  items: Array<PersonEntryT>,
};

type PodcastEntryT = {
  update: Function,
  fields: {
    persons: {
      ru: Array<{
        sys: {
          id: string,
        },
      }>,
    },
  },
};

type IdMapT = {[string]: Array<string>};

const updateEntry = async ({space, entryId, linkFieldName, linksIds}) => {
  const entry = await space.getEntry(entryId);

  entry.fields[linkFieldName] = {
    ru: linksIds.map(id => {
      return {
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id,
        },
      };
    }),
  };
  await entry.update();
};

const updateEntries = async ({space, entriesMap, fieldName}) => {
  await Promise.all(
    Object.keys(entriesMap).map(async id => {
      await updateEntry({
        space,
        entryId: id,
        linkFieldName: fieldName,
        linksIds: entriesMap[id],
      });
    }),
  );
};

// const getTargetsThatDiffer = (
//   reverseSourcesToTargets,
//   reverseOldSourcesToTargets,
// ) => {
//   return Object.keys(reverseSourcesToTargets).filter(id => {
//     return (
//       JSON.stringify(reverseSourcesToTargets[id]) !==
//       JSON.stringify(reverseOldSourcesToTargets[id])
//     );
//   });
// };

const collectSourceTargetMaps = async ({
  space,
  targetsFieldName,
  sourcesFieldName,
  sourceItems,
  items,
}) => {
  const sourcesToTargets: IdMapT = {};

  await Promise.all(
    sourceItems.map(async (item: any) => {
      const {id: sourceId} = item;
      if (!item[targetsFieldName]) {
        sourcesToTargets[sourceId] = [];
        return;
      }

      item[targetsFieldName].ru.forEach(({sys: {id: targetId}}) => {
        addToMap(sourcesToTargets, sourceId, targetId);
      });
    }),
  );

  return sourcesToTargets;
};

const collectIds = async (space, sourceContentType, targetContentType) => {
  const sourceItems: EntriesT = await space.getEntries({
    content_type: sourceContentType,
  });

  const targetItems: EntriesT = await space.getEntries({
    content_type: targetContentType,
  });

  const items = {};

  sourceItems.items.forEach(({sys: {id}, fields}) => {
    items[id] = Object.assign({}, {type: sourceContentType, id}, fields);
  });

  targetItems.items.forEach(({sys: {id}, fields}) => {
    items[id] = Object.assign({}, {type: targetContentType, id}, fields);
  });

  return items;
};

const createIdToTitle = items => id => {
  if (items[id].type === sourceContentType) {
    return items[id].name.ru + ' ' + items[id].lastname.ru;
  }
  return items[id].title.ru;
};

const idsMapToTitles = (items, map) => {
  const idToTitle = createIdToTitle(items);
  return _.fromPairs(
    _.toPairs(map).map(([key, arrayOfVal]) => {
      return [idToTitle(key), arrayOfVal.map(idToTitle)];
    }),
  );
};

const combinedToTitles = (items, map) => {
  const idToTitle = createIdToTitle(items);
  return _.fromPairs(
    _.toPairs(map).map(([key, value]) => {
      const {fromSourceToTarget = [], fromTargetToSource = []} = value;
      return [
        idToTitle(key),
        {
          fromSourceToTarget: fromSourceToTarget.map(idToTitle),
          fromTargetToSource: fromTargetToSource.map(idToTitle),
        },
      ];
    }),
  );
};

const buildOneWayMaps = async ({
  space,
  items,
  sourceContentType,
  targetContentType,
  sourcesFieldName,
  targetsFieldName,
}) => {
  const sourceItems = Object.values(items).filter(
    ({type}: any) => type === sourceContentType,
  );

  const targetItems = Object.values(items).filter(
    ({type}: any) => type === targetContentType,
  );

  const sourcesToTargets = await collectSourceTargetMaps({
    space,
    targetsFieldName,
    sourcesFieldName,
    sourceItems,
    items,
  });

  const reverseSourcesToTargets: IdMapT = reverseMap(sourcesToTargets);

  return {
    sourcesToTargets,
    reverseSourcesToTargets,
  };
};

const dumpJSON = (filename, obj) => {
  fs.writeFileSync(filename, JSON.stringify(obj, null, 2), 'utf-8');
};

(async () => {
  try {
    const space: SpaceT = await client.getSpace('ej3wzulnf8dw');

    const sourceContentType = 'person';
    const targetContentType = 'drinkcast';
    const sourcesFieldName = 'persons';
    const targetsFieldName = 'podcasts';

    const items = await collectIds(space, sourceContentType, targetContentType);

    // const items = JSON.parse(fs.readFileSync('dump.json', 'utf-8'));

    // fs.writeFileSync('dump.json', JSON.stringify(items, null, 2), 'utf-8');

    // const targetsThatDiffer = getTargetsThatDiffer(reverseSourcesToTargets);

    const fromPersonToPodcastMaps = await buildOneWayMaps({
      space,
      items,
      sourceContentType: sourceContentType,
      targetContentType: targetContentType,
      sourcesFieldName: sourcesFieldName,
      targetsFieldName: targetsFieldName,
    });

    const fromPodcastToPersonMaps = await buildOneWayMaps({
      space,
      items,
      sourceContentType: targetContentType,
      targetContentType: sourceContentType,
      sourcesFieldName: targetsFieldName,
      targetsFieldName: sourcesFieldName,
    });

    const combined = _.fromPairs(
      Object.keys(fromPersonToPodcastMaps.sourcesToTargets).map(id => {
        return [
          id,
          {
            fromSourceToTarget: fromPersonToPodcastMaps.sourcesToTargets[id],
            fromTargetToSource:
              fromPodcastToPersonMaps.reverseSourcesToTargets[id],
          },
        ];
      }),
    );

    const combined2 = _.fromPairs(
      Object.keys(fromPodcastToPersonMaps.sourcesToTargets).map(id => {
        return [
          id,
          {
            fromSourceToTarget: fromPodcastToPersonMaps.sourcesToTargets[id],
            fromTargetToSource:
              fromPersonToPodcastMaps.reverseSourcesToTargets[id],
          },
        ];
      }),
    );

    const removeSame = map => {
      const res = {};
      Object.keys(map).forEach(key => {
        if (
          _.difference(map[key].fromSourceToTarget, map[key].fromTargetToSource)
            .length !== 0 ||
          _.difference(map[key].fromTargetToSource, map[key].fromSourceToTarget)
            .length !== 0
        ) {
          res[key] = map[key];
        }
      });
      return res;
    };

    const union = map => {
      const res = {};
      Object.keys(map).forEach(key => {
        res[key] = _.union(
          map[key].fromSourceToTarget,
          map[key].fromTargetToSource,
        );
      });
      return res;
    };

    const sortBy = (map, func) => {
      const res = {};
      Object.keys(map).forEach(key => {
        res[key] = _.sortBy(map[key], func);
      });
      return res;
    };

    dumpJSON('combined.json', combinedToTitles(items, removeSame(combined)));
    dumpJSON('combined2.json', combinedToTitles(items, removeSame(combined2)));

    const idToTitle = createIdToTitle(items);

    const finalPersonToPodcast = sortBy(union(removeSame(combined)), id => {
      return -parseInt(
        idToTitle(id)
          .trim()
          .split(' — ')[0]
          .split('#')[1],
      );
    });

    dumpJSON(
      'finalPersonToPodcast.json',
      idsMapToTitles(items, finalPersonToPodcast),
    );

    const finalPodcastToPerson = sortBy(union(removeSame(combined2)), id =>
      idToTitle(id).trim(),
    );

    dumpJSON(
      'finalPodcastToPerson.json',
      idsMapToTitles(items, finalPodcastToPerson),
    );

    await updateEntries({
      space,
      entriesMap: finalPersonToPodcast,
      fieldName: targetsFieldName,
    });

    await updateEntries({
      space,
      entriesMap: finalPodcastToPerson,
      fieldName: sourcesFieldName,
    });

    // dumpJSON(
    //   'fromPersonToPodcastMaps.sourcesToTargets.json',
    //   idsMapToTitles(items, fromPersonToPodcastMaps.sourcesToTargets),
    // );

    // dumpJSON(
    //   'fromPersonToPodcastMaps.reverseSourcesToTargets.json',
    //   idsMapToTitles(items, fromPersonToPodcastMaps.reverseSourcesToTargets),
    // );

    // dumpJSON(
    //   'fromPodcastToPersonMaps.sourcesToTargets.json',
    //   idsMapToTitles(items, fromPodcastToPersonMaps.sourcesToTargets),
    // );

    // dumpJSON(
    //   'fromPodcastToPersonMaps.reverseSourcesToTargets.json',
    //   idsMapToTitles(items, fromPodcastToPersonMaps.reverseSourcesToTargets),
    // );

    // console.log(oldSourcesToTargets);

    // await updateEntries({
    //   space,
    //   entriesIds: targetsThatDiffer,
    //   reverseMap: reverseSourcesToTargets,
    //   fieldName: sourcesFieldName,
    // });
  } catch (ex) {
    console.log(ex);
  }
})();
