import * as styles from './event-details.module.css'

import * as React from 'react'
import type { HeadFC } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'
import { Header } from 'src/components/layout/Header'

const EventDetailsPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          <h1 className={styles.heading}>Event Structure</h1>

          <p>
            Q: What's the Event Structure?
          </p>

          <p>
            A: Two drafts on Saturday, with open cubing from 7PM until late! Then, two cube drafts on Sunday. For the second draft on Sunday, one pod will be comprised of the top 8 players at the event, and the winner of that pod will be the Pack One Pick One Champion!
          </p>

          <p>
            Q: What Cubes Will be Available?
          </p>

          <p>
            A: Cube Submissions are open, and we'll be selecting them once we're closer to the event date, but you can expect Pauper, Vintage, Commander cubes and everything in between. The list of cubes below will be updated as we get more submissions!
          </p>

          <p>
            Q: Which Cubes Will I Draft?
          </p>

          <p>
            A: Hedron Network, which is an incredible community made tool, will let you rank your cubes in order of preference for each round. Hedron Network then creates pods based on player preference.
            For more information check out: http://hedron.network/
          </p>

          <p>
            Q: I Bought a Ticket But Can't Attend, What Happens?
          </p>

          <p>
            A: I can give you a refund up to two weeks up until January 3rd, 2026. After this, reach out to me (CaseyMalone) on our Discord, I might be able to connect you with a community member on the waitlist who can take your ticket.
          </p>




          <p>
            If you still have questions,{' '}
            <a href="https://discord.com/invite/mGbrWenMKg">reach out in the discord</a>
            !
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default EventDetailsPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>Event Details - The Salt Box</title>

      <meta
        property="og:image"
        content="http://packonepickone.com/pack-one-pick-one-og.png"
      />
      <meta property="og:image-width" content="1200" />
      <meta property="og:image-height" content="630" />

      <meta property="og:title" content="Event Details - The Salt Box" />

      <meta
        name="description"
        content="The event will include four draft slots over two days. Players will be organized into pods based on ranked choice votes of their preferred cubes."
      />
      <meta
        property="og:description"
        content="The event will include four draft slots over two days. Players will be organized into pods based on ranked choice votes of their preferred cubes."
      />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
