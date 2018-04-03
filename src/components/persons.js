import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PersonsList from '../components/persons-list'
import { defaultHelmetMeta } from '../layouts/index'

import styles from './../css/person.module.css'

function getLastPodcast(array) {
  const newArray = array.map(podcast => podcast.number)
  const last = Math.max.apply(null, newArray)

  return last
}

function sortPersons(array) {
  const newArray = [...array]
    .sort((prev, next) => {
      if (!prev.node.podcasts) return 1
      if (!next.node.podcasts) return -1

      if (prev.node.podcasts.length !== next.node.podcasts.length) {
        return next.node.podcasts.length - prev.node.podcasts.length
      }
      else {
        const nextLastPodcast = next.node.podcasts ? getLastPodcast(next.node.podcasts) : 0
        const prevLastPodcast = prev.node.podcasts ? getLastPodcast(prev.node.podcasts) : 0

        return nextLastPodcast - prevLastPodcast
      }
    })

  return newArray
}


export default props => {
  const { pathContext: { data: person } } = props
  const sortedPersons = sortPersons(person).map(edge => edge.node)

  return (
    <div>
      <div className={styles.list}>
        <PersonsList collection={sortedPersons} />
      </div>

      <Helmet meta={defaultHelmetMeta}>
        <title>SPB Frontend. Drinkcast</title>
        <link
          rel='alternate'
          type='application/rss+xml'
          href='/podcast.xml' />
      </Helmet>
    </div>
  )
}
