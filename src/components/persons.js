import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import RSSIcon from '-!svg-react-loader?name=Icon!../../static/rss-symbol.svg'
import ITunesIcon from '-!svg-react-loader?name=Icon!../../static/itunes.svg'
import TelegramIcon from '-!svg-react-loader?name=Icon!../../static/telegram.svg'

import styles from './../css/podcast.module.css'
import {defaultHelmetMeta} from '../layouts/index'

const Person = ({node: {id, name, lastname}}) => (
  <div>
    <Link to={`/person/${id}`}>
      {name} {lastname}
    </Link>
  </div>
)

export default props => {
  const {pathContext: {data: person}} = props
  return (
    <div>
      <div>
        {person.map(({node}, index) => {
          return <Person
            key={index}
            node={node} />
        })}
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
