import * as styles from './LocalAmenities.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

export const LocalAmenities: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Typography.PrimaryHeading>Local Amenities</Typography.PrimaryHeading>
      </div>
    </div>
  )
}
