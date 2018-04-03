import React from 'react'
import Link from 'gatsby-link'
import cn from 'classnames'

import st from './styles.module.css'

export default props => {
  return (
    <ul className={cn(props.className, st.list)}>
      {props.collection.map(({ name, lastname, photo, slug }) => (
        <li
          key={`${slug}`}
          className={st.item}>
          <div className={st.photo}>
            <Link to={`/persons/${slug}`}>
              {photo ? (
                <img src={`https:${photo.file.url}?fit=thumb&h=100&w=100`} />
              ) : (
                <img src='/Person-placeholder.jpg' />
              )}
            </Link>
          </div>

          <Link to={`/persons/${slug}`}>
            {name} {lastname}
          </Link>
        </li>
      ))}
    </ul>
  )
}
