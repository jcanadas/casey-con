import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby-link'

import { Logo } from 'src/components/Logo'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>

      <div className={styles.headerDetails}>
        <div>
		  <p><font size="40">PACK ONE PICK ONE </font></p><br />
          A Two-Day <em>Magic: The Gathering</em> Cube Event in Los Angeles, CA
        </div>
        <p>January 17-18, 2026</p>
      </div>
    </div>
  )
}
