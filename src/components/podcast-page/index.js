'use strict'
import React, {Component} from 'react'
import styles from './style.module.css'
import Link from 'gatsby-link'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'
import {timestampToSeconds} from '../../utils/time'

import DotsIcon from '-!svg-react-loader?name=Icon!./dots.svg'

const PLAYBACK_RATES = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0]

class PodcastPage extends Component {
  constructor(props) {
    super(props)
    this.handleTimeClick = this.handleTimeClick.bind(this)
    this.handleActionsToggle = this.handleActionsToggle.bind(this)
    this.handleSetTimestamp = this.handleSetTimestamp.bind(this)

    this.state = {
      actionsVisible: false,
    }
  }

  componentDidMount() {
    const match = location.search.slice(1).match(/t=(\d+)$/)

    if (match) {
      this.audioEl.currentTime = match[1]
    }
  }

  handleTimeClick(e) {
    const {target} = e
    if (target.classList.contains('podcast_time')) {
      e.preventDefault()
      this.audioEl.currentTime = timestampToSeconds(target.innerText)
    }
  }

  handleSpeedClick(speed) {
    this.audioEl.playbackRate = speed
  }

  handleActionsToggle() {
    this.setState(({actionsVisible}) => ({
      actionsVisible: !actionsVisible,
    }))
  }

  handleSetTimestamp() {
    // To int32
    let time = this.audioEl.currentTime | 0

    // Make sure it is not NaN or Infinity
    if (!isFinite(time)) {
      time = 0
    }

    history.replaceState(null, '', `${location.pathname}?t=${time}`)
  }

  render() {
    const {actionsVisible} = this.state
    const {data, id} = this.props.pathContext
    const {node: {title, link, notes, formatedDate}} = data

    return (
      <div>
        <div className={styles.back_link}>
          <Link to='/podcast/'>{'<'} назад</Link>
        </div>

        <header className={styles.header}>
          <h3 className={styles.header_title}>{title}</h3>
          <date className={styles.header_date}>{formatedDate}</date>
        </header>

        <div className={styles.player}>
          <audio
            className={styles.player_audio}
            controls='controls'
            preload='metadata'
            src={link}
            ref={el => (this.audioEl = el)} />
          <div className={styles.player_controls}>
            <div className={styles.player_controls_actions_panel}>
              <button
                type='button'
                className={styles.player_actions}
                onClick={this.handleActionsToggle}>
                <DotsIcon className={styles.player_actions_dots} />
                <span>Действия</span>
              </button>
            </div>
            <div className={styles.player_speed}>
              {PLAYBACK_RATES.map(speed => (
                <button
                  key={speed}
                  className={styles.player_speed_item}
                  onClick={() => this.handleSpeedClick(speed)}>
                  {speed}
                </button>
              ))}
            </div>
            <div
              className={styles.player_controls_panel}
              hidden={!actionsVisible}>
              <button
                type='button'
                className={styles.player_button}
                onClick={this.handleSetTimestamp}>
                <span>Установить метку времени</span>
              </button>
            </div>
          </div>
        </div>

        <footer
          onClick={this.handleTimeClick}
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
}

export default PodcastPage
