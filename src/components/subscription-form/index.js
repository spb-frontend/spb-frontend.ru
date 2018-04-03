/* eslint-disable max-len */
'use strict'

import React, {Component} from 'react'
import {getJSON, postJSON, serialize} from '../../../utils'
import st from './style.module.css'

class SubscriptionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      status: 'form',
    }
  }

  componentDidMount() {
    window.formLoginRequestSuccess = this.invited
  }

  invited = resp => {
    if (resp.result === 'success') {
      this.showSuccess(resp)
    } else {
      this.showError(resp)
    }
  }

  sendForm = event => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = serialize(form)
    const url = `//vk.us13.list-manage.com/subscribe/post-json?${formData}&id=8651e5fe3f&u=e16bb3d05ec796d0d4d06c13d&c=formLoginRequestSuccess`
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = true
    script.src = url

    document.getElementsByTagName('head')[0].appendChild(script)
    document.getElementsByTagName('head')[0].removeChild(script)
  }

  showError = resp => {
    this.setState({errors: [resp]})
  }

  showSuccess = resp => {
    this.setState({status: 'success'})
  }

  render() {
    return (
      <div
        id='mc_embed_signup'
        className={st.subscription}>
        {this.state.status === 'success' && (
          <span className={st.success}>
            Спасибо, проверьте вашу почту и подтвердите подписку
          </span>
        )}
        {this.state.status === 'form' && (
          <form
            onSubmit={this.sendForm}
            action=''
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className={st.form}
            target='_blank'>
            <input
              type='email'
              name='EMAIL'
              className={st.input}
              id='mce-EMAIL'
              placeholder='email address'
              required />
            <div
              style={{
                position: 'absolute',
                left: '-9999vw',
              }}
              aria-hidden='true'>
              <input
                type='text'
                name='b_e16bb3d05ec796d0d4d06c13d_8651e5fe3f'
                tabIndex='-1' />
            </div>
            <div className={st.errors}>
              {this.state.errors.map(err => (
                <div
                  key={err}
                  className={st.error}
                  dangerouslySetInnerHTML={{__html: err.msg}} />
              ))}
            </div>
            <input
              type='submit'
              value='Subscribe'
              name='subscribe'
              id='mc-embedded-subscribe'
              className={st.button} />
          </form>
        )}
      </div>
    )
  }
}

export {SubscriptionForm}
