'use strict'
import React, {Component} from 'react'
import styles from './style.module.css'
import Link from 'gatsby-link'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'

const PodcastPage = props => {
  const {data, id} = props.pathContext
  const {node: {title, date, link, notes}} = data

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
          {title}
        </h3>
        <date className={styles.header_date}>
          {date}
        </date>
      </header>

      <audio
        className={styles.audio}
        controls='controls'
        preload='none'
        src={link} />

      <footer
        className={styles.footer}
        dangerouslySetInnerHTML={{__html: marked(notes.notes)}} />

      <Box shortname='http-spb-frontend-ru'>
        <Thread
          url={`http://spb-frontend.ru/podcast/${id + 1}`}
          title={title}
          identifier={`podcast-${id + 1}`} />
      </Box>
    </div>
  )
}

export default PodcastPage
