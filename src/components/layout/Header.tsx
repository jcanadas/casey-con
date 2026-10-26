import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby'

import { Logo } from 'src/components/Logo'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>

      <div className={styles.headerDetails}>
        <div>
          <p>
            <span className={styles.eventName}>PACK ONE PICK ONE </span>
          </p>
          <br />A Two-Day <em>Magic: The Gathering</em> Cube Event in Los
          Angeles, CA
        </div>
        <p>TEST TEST TEST</p>
      </div>
    </div>
  )
}
