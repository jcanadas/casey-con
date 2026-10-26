import * as styles from './FAQ.module.css'

import * as React from 'react'
import * as Typography from 'src/components/general/Typography'

export const FAQ: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.question}>
          <Typography.PrimaryHeading>F.A.Q.</Typography.PrimaryHeading>
        </div>
        <br />
        <p className={styles.question}>What Cubes Will be Available?</p>
        <p className={styles.answer}>
          We&apos;re accepting cube submissions from the larger community!
          We&apos;re still finding out what people have to offer, but you can
          expect Pauper, Vintage, Commander cubes and everything in between. The
          list of cubes below will be updated as we get more submissions. In the
          mean time, fill out the form linked at the top of the page to add your
          cube to the event!
        </p>
        <p className={styles.question}>Which Cubes Will I Draft?</p>

        <p className={styles.answer}>
          Hedron Network, which is an incredible community made tool, will let
          you rank your cubes in order of preference for each round. Hedron
          Network then creates pods based on player preference. For more
          information, check it out here:{' '}
          <a href="http://hedron.network/">Hedron Network</a>
        </p>
        <p className={styles.question}>
          I Bought a Ticket But Can&apos;t Attend, What Happens?
        </p>
        <p className={styles.answer}>
          I can give you a refund up to two weeks before the event - until
          Monday, January 4th, 2027. After that, reach out to me (CaseyMalone)
          on our Discord, I might be able to connect you with a community member
          on the waitlist who can take your ticket, but I can&apos;t give a
          refund at that point.
        </p>
        <p className={styles.question}>
          Any Changes from Last Year&apos;s Event?
        </p>
        <p className={styles.answer}>
          Two things! The first is that we&apos;re adding an extra pod! More
          players, more cube, more fun. The second is that we&apos;ve removed
          the post-event open cubing on Saturday, and will be closing up after
          the second draft.
        </p>
      </div>
    </div>
  )
}
