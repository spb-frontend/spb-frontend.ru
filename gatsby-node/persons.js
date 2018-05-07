const slash = require('slash');
const path = require('path');
const slug = require('slug');

const persons = path.resolve(process.cwd(), 'src/components/persons.js');
const personTemplate = path.resolve(
  process.cwd(),
  'src/components/person-page/index.js',
);
module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(
    `
      {
        allContentfulPerson {
          edges {
            node {
              id
              name
              lastname
              position
              vk
              telegram
              twitter
              slack
              photo {
                file {
                  url
                }
              }
              company
              podcasts {
                title
                number
              }
            }
          }
        }
      }
    `,
  );
  const finalEdges = result.data.allContentfulPerson.edges;
  createPage({
    path: '/persons',
    component: slash(persons),
    context: {
      data: finalEdges,
    },
  });

  finalEdges.forEach(({node}, id) => {
    createPage({
      path: `/persons/${slug(node.id)}`,
      component: slash(personTemplate),
      context: {
        data: node,
        id,
      },
    });
  });
};
