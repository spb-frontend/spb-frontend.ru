import React, {Component} from 'react'
import cn from 'classnames'
import throttle from 'lodash.throttle'
import {timestampToSeconds} from '../../utils/time'
import {
  Sound,
  Play,
  Volume,
  Timer,
  Progress,
  Speed,
  Download,
} from './components'
import st from './style.module.css'

export class Player extends Component {
  state = {
    playStatus: 'STOPPED',
    position: 0,
    duration: 0,
    volume: 100,
    playbackRate: 1,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({position: nextProps.position})
  }

  handlePlaying = opts => {
    const seconds = Math.trunc(opts.position / 1000)

    history.replaceState(null, null, `${location.pathname}?time=${seconds}`)

    this.setState(opts)
  }

  handleLoading = opts => {
    this.setState({duration: opts.duration})
  }

  render() {
    const {file, fileName} = this.props
    const {playStatus, position, duration, volume, playbackRate} = this.state

    return (
      <div className={st.player}>
        <div className={st.controls}>
          <Play
            player={this}
            className={cn(st.control, {
              [st.play]: playStatus === 'STOPPED' || playStatus === 'PAUSED',
              [st.pause]: playStatus === 'PLAYING',
            })} />
          <Speed
            player={this}
            playbackRate={playbackRate}
            className={cn(st.control, st.small)} />
          <Volume
            player={this}
            volume={volume}
            className={cn(st.control, st.small)} />
        </div>
        <Progress
          player={this}
          position={position}
          duration={duration}
          className={st.progress} />
        <Timer
          position={position}
          className={st.timer} />

        <Sound
          position={position}
          volume={volume}
          playbackRate={playbackRate}
          onPlaying={this.handlePlaying}
          onLoading={this.handleLoading}
          playStatus={playStatus}
          autoLoad={true}
          url={file} />

        <Download
          fileName={fileName}
          url={file} />

        <div />
      </div>
    )
  }
}
