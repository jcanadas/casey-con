import * as styles from './Footer.module.css'

import React from 'react'

interface Props {}

export const Footer: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={styles.container}>
      <p>
        Event Organized by Max Richards
        <br />
        Website by <a href="https://x.com/ahmattox">Anthony Mattox</a>
      </p>
    </div>
  )
}
