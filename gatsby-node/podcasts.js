const slash = require('slash');
const path = require('path');
const slug = require('slug');
const {getHumanDate} = require('../utils/date');

const podcastsPageTemplate = path.resolve(
  process.cwd(),
  'src/components/podcasts.js',
);
const postTemplate = path.resolve(
  process.cwd(),
  'src/components/podcast-page/index.js',
);

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(`
    {
      allContentfulDrinkcast(limit: 1000, sort: {order: DESC, fields: [date]}) {
        edges {
          node {
            number
            file
            title
            date
            notes {
              notes
            }
          }
        }
      }
    }
  `);
  const finalEdges = result.data.allContentfulDrinkcast.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        formatedDate: getHumanDate(edge.node.date),
      }),
    };
  });
  createPage({
    path: '/podcast',
    component: slash(podcastsPageTemplate),
    context: {
      data: {episodes: finalEdges},
    },
  });

  // this just duplicate of /podcast, maybe need to refactor
  createPage({
    path: '/podcasts',
    component: slash(podcastsPageTemplate),
    context: {
      data: {episodes: finalEdges},
    },
  });

  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/podcast/${slug(node.number)}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    });
  });

  // this just duplicate of /podcast, maybe need to refactor
  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/podcasts/${slug(node.number)}`,
      component: slash(postTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
