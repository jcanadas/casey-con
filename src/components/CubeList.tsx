import * as styles from './CubeList.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

export const CubeList: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Typography.PrimaryHeading>Cubes</Typography.PrimaryHeading>
      </div>
    </div>
  )
}
