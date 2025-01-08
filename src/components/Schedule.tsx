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
          <div className={styles.itemLabel}>Draft #1</div>
          <div className={styles.itemTime}>9am - 1pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>1pm - 2pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #2</div>
          <div className={styles.itemTime}>2pm - 6pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Casual Bonus Round</div>
          <div className={styles.itemTime}>
            Location:{' '}
            <a href="https://www.nolandbaltimore.com">No Land Beyond</a>
          </div>
          <div className={styles.itemTime}>
            <a href="https://www.google.com/maps/place/2125+Maryland+Ave,+Baltimore,+MD+21218/data=!4m2!3m1!1s0x89c804e9ff4cd49f:0x4a6a63b42175aa26?sa=X&ved=1t:242&ictx=111">
              2125 Maryland Avenue
            </a>
          </div>
          <div className={styles.itemTime}>~7:30pm onward</div>
        </div>
      </div>

      <div className={styles.day}>
        <h3 className={styles.dayHeading}>Sunday</h3>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #3</div>
          <div className={styles.itemTime}>9am - 1pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Lunch Break</div>
          <div className={styles.itemTime}>1pm - 2pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Draft #4 & Top 8 Draft</div>
          <div className={styles.itemTime}>2pm - 6pm</div>
        </div>

        <div className={styles.item}>
          <div className={styles.itemLabel}>Casual Bonus Cube</div>
        </div>
      </div>
    </div>
  )
}
