import * as styles from './Logo.module.css'

import * as React from 'react'

export const Logo: React.FC = () => {
  return (
    <img
      src="/salt-box-logo.png"
      width={192}
      className={styles.image}
      alt="The Salt Box"
    />
  )
}
