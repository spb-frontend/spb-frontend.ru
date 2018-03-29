import React, {Component} from 'react'
import st from './style.module.css'
import Link, {navigateTo} from 'gatsby-link'
import BackButton from '../back-button'
import marked from 'marked'
import {Box, Thread} from 'react-disqussion'
import {Player} from '../Player'
import {timestampToSeconds} from '../../utils/time'
import throttle from 'lodash.throttle'

class PodcastPage extends Component {
  state = {
    time: 0,
  }

  componentDidMount() {
    this.getInitialTime()
  }

  handleTimeClick = event => {
    const {target} = event
    if (target.classList.contains('podcast_time')) {
      event.preventDefault()
      this.setState({time: timestampToSeconds(target.innerText) * 1000})
    }
  }

  getInitialTime() {
    const rgexRes = location.search.match(/time=(\d+)/)

    this.setState({time: rgexRes ? parseInt(rgexRes[1]) * 1000 : 0})
  }

  render() {
    const {data} = this.props.pathContext
    const {title, number, file, notes, formatedDate} = data

    return (
      <div>
        <div className={st.back_link}>
          <BackButton history={this.props.history} />
        </div>

        <header className={st.header}>
          <h3 className={st.header_title}>{title}</h3>
          <date className={st.header_date}>{formatedDate}</date>
        </header>

        <Player
          position={this.state.time}
          file={file}
          fileName={title} />

        <footer
          onClick={this.handleTimeClick}
          className={st.footer}
          dangerouslySetInnerHTML={{__html: marked(notes.notes)}} />

        <Box shortname='http-spb-frontend-ru'>
          <Thread
            url={`http://spb-frontend.ru/podcast/${number}`}
            title={title}
            identifier={`podcast-${number}`} />
        </Box>
      </div>
    )
  }
}

export default PodcastPage
