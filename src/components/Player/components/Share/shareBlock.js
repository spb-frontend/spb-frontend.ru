import React, { Component } from 'react'
import cn from 'classnames'
import st from './style.module.css'
import TwitterIcon from './Icons/twitter'
import VkIcon from './Icons/vk'
import FacebookIcon from './Icons/facebook'

const social = [
  {
    name: 'vk',
    icon: VkIcon,
    link: 'https://vk.com/share.php?url=',
  },
  {
    name: 'facebook',
    icon: FacebookIcon,
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    name: 'twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/home?status=',
  }
]

export default class ShareBlock extends Component {

  toggleTimeCode = () => {
    this.setState((prevState) => {
      return { timeCode: !prevState.timeCode }
    })
  }

  getUrl = (position) => {
    const location = this.location ? this.location : ''
    if (!this.state.timeCode) {
      return location
    }
    return `${location}?time=${Math.floor(position / 1000)}`
  }

  selectText = (ev) => {
    const el = ev.target
    el.setSelectionRange(0, el.value.length)
  }

  state = {
    timeCode: true
  }

  componentDidMount = () => {
    this.location = location.origin + location.pathname
    document.addEventListener('click', this.props.closeBlock)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.closeBlock)
  }

  render() {
    const { opened, position } = this.props
    const { timeCode } = this.state
    return (
      <div
        className={cn(st.shareBlock, { [st.visible]: opened })}
        onClick={ev => ev.nativeEvent.stopImmediatePropagation()} >
        <div className={st.social}>
          <span>Поделиться:</span>
          <ul className={st.socialList}>
            {
              social.map(item => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.name}
                    className={st.socialItem}>
                    <a
                      className={st.socialLink}
                      target='_blank'
                      href={item.link + this.getUrl(position)}>
                      <Icon />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <input
          type='text'
          onFocus={this.selectText}
          className={st.input}
          value={this.getUrl(position)}
          readOnly={true} />
        <input
          type='checkbox'
          id='timecode'
          onChange={this.toggleTimeCode}
          className={st.checkbox}
          checked={timeCode} />
        <label
          className={st.time}
          htmlFor='timecode'>
          <span>Добавить тайм-код</span>
        </label>
      </div>
    )
  }
}