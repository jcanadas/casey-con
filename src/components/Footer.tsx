import * as styles from './Footer.module.css'

import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        Event Organized by Casey Malone
        <br />
        Website forked from{' '}
        <a href="https://bsky.app/profile/anthony.luckypaper.co">
          Anthony Mattox
        </a>
      </p>
    </div>
  )
}
