import * as styles from './EventDetails.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

export const EventDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketInfo}>
        <a
          href="https://www.eventbrite.com/e/the-salt-box-tickets-1057472070429?aff=oddtdtcreator"
          className={styles.buyButton}
        >
          Buy Tickets - $45
        </a>
        <p className={styles.ticketNote}>72 Total Seats Available</p>
      </div>

      <a href="https://discord.gg/eQgEnpQgeb" className={styles.discordButton}>
        Join the Discord Server
      </a>

      <hr className={styles.rule} />

      <Typography.SecondaryHeading>Location</Typography.SecondaryHeading>

      <div className={styles.location}>
        <p>
          <a href="https://g.co/kgs/19D86dZ">
            Emmanuel Episcopal Church
            <br />
            811 Cathedral Street
            <br />
            Baltimore, MD
          </a>
        </p>
      </div>

      <p>
        The event is located near downtown in the Mt Vernon neighborhood, close
        to transportation and hotels. It&rsquo;s walking distance from the{' '}
        <a href="https://g.co/kgs/4Hj6bJ8">Penn Station train station</a> (3/4
        mi) and <a href="https://g.co/kgs/LBrJZST">LightRail Station</a> (1/4
        mi) which goes directly to BWI airport.
      </p>
    </div>
  )
}
