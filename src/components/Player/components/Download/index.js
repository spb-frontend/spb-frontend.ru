import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DownloadIcon from './download-icon'
import cn from 'classnames'
import st from './style.module.css'

const NewBlob = function(data, datatype) {
  let out
  try {
    out = new Blob([data], {type: datatype})
  } catch (e) {
    window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder

    if (e.name == 'TypeError' && window.BlobBuilder) {
      const bb = new BlobBuilder() // eslint-disable-line
      bb.append(data)
      out = bb.getBlob(datatype)
    } else if (e.name == 'InvalidStateError') {
      out = new Blob([data], {type: datatype})
    }
  }
  return out
}

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
        // const blob = new Blob([blobs])
        const blob = new NewBlob(blobs, 'audio/mpeg')
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
