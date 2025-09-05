import * as styles from './Schedule.module.css'

import React from 'react'

import * as Typography from 'src/components/general/Typography'

export const Schedule: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography.SecondaryHeading>Event Schedule</Typography.SecondaryHeading>

      <div className={styles.day}>
        <h3 className={styles.dayHeading}>Saturday</h3>
        <div className={styles.item}>
          <div className={styles.itemLabel}>Check-In</div>
          <div className={styles.itemTime}>9AM - 1PM</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #1</div>
          <div className={styles.itemTime}>10AM - 2PM</div>
        </div>
        
        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>2PM - 3PM</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #2</div>
          <div className={styles.itemTime}>3PM - 7PM</div>
        </div>
        
        <div className={styles.item}>
          <div className={styles.itemLabel}>Open Cubing</div>
          <div className={styles.itemTime}>7PM - 11PM</div>
        </div>

      </div>

      <div className={styles.day}>
        <h3 className={styles.dayHeading}>Sunday</h3>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #1</div>
          <div className={styles.itemTime}>10AM - 2PM</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>2PM - 3PM</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #2</div>
          <div className={styles.itemTime}>3PM - 7PM</div>
        </div>

      </div>
    </div>
  )
}
