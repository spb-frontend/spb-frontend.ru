import React, { Component } from 'react'
import Icon from './Icons/share'
import ShareBlock from './shareBlock'
import cn from 'classnames'
import { wrap } from './style.module.css'

export class Share extends Component {

  toggleBlock = (ev) => {
    ev.nativeEvent.stopImmediatePropagation()
    this.setState((prevState) => {
      return { opened: !prevState.opened }
    })
  }

  closeBlock = () => {
    this.setState({ opened: false })
  }

  state = {
    opened: false
  }

  render() {
    const { position, classNames } = this.props
    const { opened } = this.state

    return (
      <div className={wrap}>
        <button
          className={cn(...classNames)}
          style={{ marginLeft: 'auto' }}
          onClick={ev => this.toggleBlock(ev)}>
          <Icon />
        </button>
        <ShareBlock
          position={position}
          opened={opened}
          closeBlock={this.closeBlock} />
      </div >
    )
  }
}