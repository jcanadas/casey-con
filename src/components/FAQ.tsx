import * as styles from './FAQ.module.css'

import * as React from 'react'
import { Link } from 'gatsby-link'

export const FAQ: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <div className={styles.question}>PARKING</div>
        <p className={styles.answer}>
          There is an underground garage located at 1110 N. Western. $5 for the two hours or $10.00 for the day.
          Once you park - you can walk around the corner to the Santa Monica entrance.
          Street parking is available but sparse!
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>PUBLIC TRANSIT</div>
        <p className={styles.answer}>
          Located down the block from the B-Line/Western and the Vermont/Santa Monica stops.
          Easy access to the 207 and the 4 bus line.
        </p>
      </div>


      <div className={styles.item}>
        <div className={styles.question}>PUBLIC TRANSIT</div>
        <p className={styles.answer}>
          Located down the block from the B-Line/Western and the Vermont/Santa Monica stops.
          Easy access to the 207 and the 4 bus line.
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Event Structure and Draft Pod Organization?</div>
        <p className={styles.answer}>
          Q: What's the Event Structure?
        </p>
        <p className={styles.answer}>
          A: Two drafts on Saturday, with open cubing from 7PM until late! Then, two cube drafts on Sunday. For the second draft on Sunday, one pod will be comprised of the top 8 players at the event, and the winner of that pod will be the Pack One Pick One Champion!
      </p>
      <p className={styles.answer}>
        Q: What Cubes Will be Available?
      </p>
      <p className={styles.answer}>
        A: We're going to open up Cube submissions to the larger community shortly, but you can expect Pauper, Vintage, Commander cubes and everything in between. The list of cubes below will be updated as we get more submissions.
      </p>
      <p className={styles.answer}>
        Q: Which Cubes Will I Draft?
      </p>

      <p className={styles.answer}>
        A: Hedron Network, which is an incredible community made tool, will let you rank your cubes in order of preference for each round. Hedron Network then creates pods based on player preference.
        <a href="http://hedron.network/">Hedron Network</a>
      </p>
      <p className={styles.answer}>
        Q: I Bought a Ticket But Can't Attend, What Happens?
      </p>        
      <p className={styles.answer}>
        A: I can give you a refund up to two weeks up until January 3rd, 2026. After this, reach out to me (CaseyMalone) on our Discord, I might be able to connect you with a community member on the waitlist who can take your ticket.
      </p>
    </div>



    </div >
  )
}
