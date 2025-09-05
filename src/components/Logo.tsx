import * as styles from './Logo.module.css'

import * as React from 'react'

export const Logo: React.FC = () => {
  return (
    <img
      src="/pack-one-pick-one-logo.png"
      width={192}
      className={styles.image}
      alt="Pack One Pick One"
    />
  )
}
