import React, {Component} from 'react'
import styles from './style.module.css'
import Link from 'gatsby-link'
import {Box, Thread} from 'react-disqussion'

const PodcastPage = props => {
  const {data, id} = props.pathContext
  const {node: {frontmatter, html}} = data

  return (
    <div>
      test!!!
      <div className={styles.back_link}>
        <Link to='/podcast/'>
          {'<'} назад
        </Link>
      </div>

      <header className={styles.header}>
        <h3 className={styles.header_title}>
          {frontmatter.title}
        </h3>
        <date className={styles.header_date}>
          {frontmatter.date}
        </date>
      </header>

      <audio
        className={styles.audio}
        controls='controls'
        preload='none'
        src={frontmatter.link} />

      <footer
        className={styles.footer}
        dangerouslySetInnerHTML={{__html: html}} />

      <Box shortname='http-spb-frontend-ru'>
        <Thread
          url={`http://spb-frontend.ru/podcast/${id + 1}`}
          title={frontmatter.title}
          identifier={`podcast-${id + 1}`} />
      </Box>
    </div>
  )
}

export default PodcastPage
