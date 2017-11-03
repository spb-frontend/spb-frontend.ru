'use strict'
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import styles from './../css/podcast.module.css'
import {defaultHelmetMeta} from '../layouts/index'
import {getHumanDate} from '../utils/date'

const PostLink = ({title, date, to}) =>
  <div className={styles.post}>
    <header className={styles.header}>
      <h3 className={styles.header_title}>
        <Link
          className='title'
          to={to}>
          {title}
        </Link>
      </h3>
      <date className={styles.header_date}>
        {getHumanDate(date)}
      </date>
    </header>
  </div>

export default ({data: {allContentfulDrinkcast: {edges}}}) =>
  <div>
    <h2 className={styles.title}>🍻 Drinkcast 🍻</h2>
    <div className={styles.posts}>
      {edges.map(({node: {title, date}}, index) =>
        <PostLink
          key={index}
          title={title}
          date={date}
          to={`/podcast/${index + 1}`} />,
      )}
    </div>

    <Helmet>
      {[
        ...defaultHelmetMeta,
        <title key='title'>SPB Frontend. Drinkcast</title>,
        <link
          key='rss'
          rel='alternate'
          type='application/rss+xml'
          href='/podcast.xml' />,
      ]}
    </Helmet>
  </div>

export const pageQuery = graphql`
  query MyQueryName {
    allContentfulDrinkcast(limit: 1000, sort: {order: DESC, fields: [date]}) {
      edges {
        node {
          title
          date
        }
      }
    }
  }
`
