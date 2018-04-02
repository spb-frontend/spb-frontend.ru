import React, {Component} from 'react'
import cn from 'classnames'
import st from './style.module.css'

export class Progress extends Component {
  getWidth(position, duration) {
    if (duration === 0) {
      return 0
    } else {
      return position / duration * 100
    }
  }

  handlePosition = event => {
    const {duration, player} = this.props
    const {offsetWidth, offsetLeft} = this.progressEl
    const {clientX} = event
    const newPosition =
      duration / 100 * ((clientX - offsetLeft) / offsetWidth * 100)

    player.setState({position: newPosition})
  }

  render() {
    const {className, position, duration} = this.props

    return (
      <div
        ref={el => (this.progressEl = el)}
        onClick={this.handlePosition}
        className={cn(className, st.progress_wrapper)}>
        <div
          tabIndex='0'
          className={st.progress}>
          <div
            style={{width: `${this.getWidth(position, duration)}%`}}
            className={st.progress_inner} />
        </div>
      </div>
    )
  }
}
