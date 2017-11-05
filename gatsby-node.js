'use strict'
const path = require('path')
const slug = require('slug')
const slash = require('slash')
const {getHumanDate} = require('./utils/date')

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  const result = await graphql(
    `
      {
        allContentfulDrinkcast(
          limit: 1000
          sort: {order: ASC, fields: [date]}
        ) {
          edges {
            node {
              link
              title
              date
              notes {
                notes
              }
            }
          }
        }
      }
    `,
  )
  if (result.errors) {
    throw new Error(result.errors)
  }
  const finalEdges = result.data.allContentfulDrinkcast.edges.map(edge => {
    return {
      node: Object.assign({}, edge.node, {
        formatedDate: getHumanDate(edge.node.date),
      }),
    }
  })

  const podcastPageTemplate = path.resolve('src/components/podcast.js')

  createPage({
    path: '/podcast',
    component: slash(podcastPageTemplate),
    context: {
      data: {allContentfulDrinkcast: {edges: finalEdges}},
    },
  })

  const postTemplate = path.resolve('src/components/podcast-page/index.js')

  Array.from(finalEdges).forEach((edge, id) => {
    createPage({
      path: `/podcast/${slug(id + 1)}`,
      component: slash(postTemplate),
      context: {
        data: edge,
        id,
      },
    })
  })

  return
}
