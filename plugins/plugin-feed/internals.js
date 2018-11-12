'use strict';
const fs = require('fs')
const pify = require('pify')

const writeFile = pify(fs.writeFile)

const runQuery = (handler, query) =>
  handler(query).then(result => {
    if (result.errors) {
      throw new Error(result.errors.join(', '))
    }

    return result.data
  })

const defaultOptions = {
  // Override if you want to manually specify the RSS "generator" tag.
  generator: 'GatsbyJS',

  // Run a default query to gather some information about the site.
  query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `,

  // Setup a few RSS object, merging on various feed-speciupfic options.
  setup: ({ site: { siteMetadata }, rest }) => {
    return Object.assign({}, siteMetadata, rest)
  },

  // Create a default RSS feed. Others may be added by using the format below.
  feeds: [
    {
      query: `
      {
        allMarkdownRemark(
          limit: 1000,
          sort: {
            order: DESC,
            fields: [frontmatter___date]
          },
          frontmatter: {
            draft: { ne: true }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt
              html
            }
          }
        }
      }
    `,

      // Where we will save the feed generated by this query.
      output: 'rss.xml',
    },
  ],
}

module.exports = {
  writeFile,
  runQuery,
  defaultOptions,
}
