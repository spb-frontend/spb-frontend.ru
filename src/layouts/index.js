'use strict'
import React from 'react'

import {SubscriptionForm} from '../components/subscription-form'
import {SiteHeader} from '../components/nav-header/index'

import '../css/typography.css'
import '../css/index.css'

const Template = props => (
  <div className='page'>
    <SiteHeader />

    <div className='page--container'>
      <aside className='page--aside'>
        <a
          className='no-border'
          href='/'>
          <picture className='logo page--logo'>
            <source
              type='image/webp'
              srcSet='
              https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/200x/-/format/webp/spb_frontend_logo.webp 1x,
              https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/400x/-/format/webp/-/quality/lightest/spb_frontend_logo@2x.webp 2x' />
            <img
              src='https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/200x/spb_frontend_logo.png'
              srcSet='https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/400x/-/quality/lightest/spb_frontend_logo@2x.png 2x'
              alt='SPB Frontend. Frontend artisans' />
          </picture>
        </a>

        <dl className='contacts'>
          <dt className='contacts--term'>ВКонтакте</dt>
          <dd className='contacts--desc'>
            <a href='https://vk.com/spb_frontend'>spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Твитер</dt>
          <dd className='contacts--desc'>
            <a href='https://twitter.com/spb_frontend'>@spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Канал в Телеграме</dt>
          <dd className='contacts--desc'>
            <a href='https://t.me/spb_frontend'>@spb_frontend</a>
          </dd>
          <dt className='contacts--term'>Канал на ютубе</dt>
          <dd className='contacts--desc'>
            <a href='https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA'>
              SPB Frontend
            </a>
          </dd>
          <dt className='contacts--term'>Слак-чат</dt>
          <dd className='contacts--desc'>
            <a href='https://spb-frontend.slack.com/'>spb-frontend.slack.com</a>
          </dd>
          <dt className='contacts--term'>Регистрация в Слак</dt>
          <dd className='contacts--desc'>
            <a href='http://slack.spb-frontend.ru/'>slack.spb-frontend.ru</a>
          </dd>
          <dt className='contacts--term'>Гитхаб</dt>
          <dd className='contacts--desc'>
            <a href='https://github.com/spb-frontend'>spb-frontend</a>
          </dd>
          <dt className='contacts--term'>Почта</dt>
          <dd className='contacts--desc'>
            <a href='mailto:hi@spb-frontend.ru'>hi@spb-frontend.ru</a>
          </dd>
        </dl>

        <SubscriptionForm />
      </aside>

      <main className='page--content'>{props.children()}</main>
    </div>

    <footer className='page--footer'>
      <div>
        <a href='https://github.com/spb-frontend/spb-frontend.ru'>
          Сайт на гитхабе
        </a>
      </div>
    </footer>
  </div>
)

export default Template

export const defaultHelmetMeta = [
  <meta
    key='og:title'
    property='og:title'
    content='SPB Frontend' />,
  <meta
    key='og:description'
    property='og:description'
    content='Петербургское сообщество фронтенд-разработчиков' />,
  <meta
    key='og:image'
    property='og:image'
    content='https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png' />,
  <meta
    key='og:url'
    property='og:url'
    content='http://spb-frontend.ru/' />,
  <meta
    key='twitter:card'
    name='twitter:card'
    content='summary_large_image' />,
  <meta
    key='twitter:site'
    name='twitter:site'
    content='@spb_frontend' />,
  <meta
    key='twitter:image:alt'
    name='twitter:image:alt'
    content='SPB Frontend. Frontend artisans' />,
  <meta
    key='description'
    name='description'
    content='Петербургское сообщество фронтенд-разработчиков' />,
  <meta
    key='keywords'
    name='keywords'
    content='frontend, spb-frontend' />,
]
