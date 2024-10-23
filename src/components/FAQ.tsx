import * as styles from './FAQ.module.css'

import * as React from 'react'

export const FAQ: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.question}>Parking</div>
        <p className={styles.answer}>
          There's a large parking lot behind the church available to attendees.
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Accessible Entrances</div>
        <p className={styles.answer}>
          There is ramp and elevator access to the event space. For detailed
          info contact{' '}
          <a href="mailto:max.richards97@gmail.com">max.richards97@gmail.com</a>
          .
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Why "The Salt Box"?</div>
        <p className={styles.answer}>
          The event is named after the iconic "Salt Boxes" of Baltimore city.{' '}
          <a href="https://en.wikipedia.org/wiki/Baltimore_salt_box">
            More on Wikipedia
          </a>
        </p>
      </div>
    </div>
  )
}
