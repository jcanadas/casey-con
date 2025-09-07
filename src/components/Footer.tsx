import * as styles from './Footer.module.css'

import React from 'react'

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        		Logo by <a href="https://kevinbudnik.com/">Kevin Budnik</a>, special thanks to Joe Canadas and Ben Pack for website help!
		<br />
        Website forked from{' '}
        <a href="https://bsky.app/profile/anthony.luckypaper.co">
          Anthony Mattox
        </a>
		<br /><br />
		Event Organized by Casey Malone
		<br />
		Contact me via <a href="https://discord.com/invite/mGbrWenMKg">Discord</a> or <a href="packonepickonela@gmail.com">E-Mail</a>
      </p>
    </div>
  )
}
