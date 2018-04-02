import React, {Component} from 'react'
import PlayIcon from './play-icon'
import PauseIcon from './pause-icon'

export class Play extends Component {
  switch = () => {
    this.props.player.togglePlaying()
  }

  getIcon = () => {
    const {player: {state: {playStatus}}} = this.props

    if (playStatus === 'STOPPED' || playStatus === 'PAUSED') {
      return <PlayIcon />
    } else {
      return <PauseIcon />
    }
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.switch}>
        {this.getIcon()}
      </button>
    )
  }
}
