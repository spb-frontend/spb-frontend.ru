import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DownloadIcon from './download-icon'
import cn from 'classnames'
import st from './style.module.css'

export class Download extends Component {
  state = {
    loaded: false,
  }

  handleDownloadClick = event => {
    const {url, fileName} = this.props
    this.setState({loaded: true})
    fetch(url) // eslint-disable-line
      .then(res => res.blob())
      .then(blobs => {
        const blob = new Blob([blobs])
        const element = document.createElement('a')
        document.body.appendChild(element)
        element.setAttribute('href', window.URL.createObjectURL(blob))
        element.setAttribute('download', `${fileName}.mp3`)
        element.style.display = ''
        element.click()
        document.body.removeChild(element)
      })
      .then(() => {
        this.setState({loaded: false})
      })
  }

  render() {
    const {label, loaded} = this.state
    return (
      <a
        className={st.downloadIcon}
        href='javascript:void(0)'
        onClick={() => this.handleDownloadClick()}>
        <DownloadIcon loaded={loaded} />
      </a>
    )
  }
}
