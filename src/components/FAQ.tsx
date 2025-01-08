import * as styles from './FAQ.module.css'

import * as React from 'react'

export const FAQ: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.question}>Parking</div>
        <p className={styles.answer}>
          There&rsquo;s a large parking lot behind the church available to
          attendees.
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
        <div className={styles.question}>Why &ldquo;The Salt Box&rdquo;?</div>
        <p className={styles.answer}>
          The event is named after the iconic &ldquo;Salt Boxes&rdquo; of
          Baltimore City. The city provides salt boxes filled with salt and sand
          for de-icing sidewalks to residents during the winter months.{' '}
          <a href="https://en.wikipedia.org/wiki/Baltimore_salt_box">
            More on Wikipedia
          </a>
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>What Cubes will be played?</div>
        <p className={styles.answer}>
          Cubes played at the event will be chosen as we get closer to the event
          but will feature a range largely from local Baltimore Cube designers.
        </p>
      </div>
    </div>
  )
}
