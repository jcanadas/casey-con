import * as styles from './EventDetails.module.css'

import * as React from 'react'

interface Props {}

export const EventDetails: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={styles.container}>
      <div className={styles.ticketInfo}>
        <a
          href="https://www.eventbrite.com/e/the-salt-box-tickets-1057472070429?aff=oddtdtcreator"
          className={styles.buyButton}
        >
          Buy Tickets - $45
        </a>
        <p>Max 72 Seats Available</p>
      </div>

      <a href="https://discord.gg/eQgEnpQgeb" className={styles.discordButton}>
        Join the Discord Server
      </a>

      <hr className={styles.rule} />

      <div className={styles.location}>
        <p>
          <a href="https://www.google.com/maps/place/Emmanuel+Episcopal+Church/@39.299238,-76.6551278,14z/data=!4m10!1m2!2m1!1sEmmanuel+Episcopal+Church!3m6!1s0x89c80497ee879d59:0x78699ffdd2dc1bd6!8m2!3d39.299238!4d-76.617019!15sChlFbW1hbnVlbCBFcGlzY29wYWwgQ2h1cmNoWhsiGWVtbWFudWVsIGVwaXNjb3BhbCBjaHVyY2iSARBlcGlzY29wYWxfY2h1cmNo4AEA!16s%2Fg%2F1tcv2dt_?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
            Emmanuel Episcopal Church
            <br />
            811 Cathedral Street
            <br />
            Baltimore, MD
          </a>
        </p>
      </div>
    </div>
  )
}
