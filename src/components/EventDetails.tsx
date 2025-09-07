import * as styles from './EventDetails.module.css'

import * as React from 'react'

import * as Typography from 'src/components/general/Typography'

type EventState = 'ticket-sales' | 'sold-out' | 'in-progress' | 'concluded'

const eventState: EventState = 'concluded'

export const EventDetails: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketInfo}>
        {eventState === 'concluded' ? null : eventState === 'in-progress' ? (
          <div>
            <a
              href="https://bit.ly/P1P1SignUp"
              className={styles.largeButton}
            >
              Hedron Network - Register For Drafts
            </a>
          </div>
        ) : eventState === 'sold-out' ? (
          <div className={styles.soldOut}>
            <div className={styles.soldOutHeading}>Tickets Sold Out</div>

            <p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScbph3-7uA_f35SbU7iGM_M4ARQGUCWF0SEUVsPT9G4sJFTyg/viewform">
                View Details on EventBrite
              </a>
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbph3-7uA_f35SbU7iGM_M4ARQGUCWF0SEUVsPT9G4sJFTyg/viewform"
              className={styles.largeButton}
            >
              Join Waitlist
            </a>
          </div>
        ) : eventState === 'ticket-sales' ? (
          <>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbph3-7uA_f35SbU7iGM_M4ARQGUCWF0SEUVsPT9G4sJFTyg/viewform"
              className={styles.buyButton}
            >
              Buy Tickets - $45
            </a>
            <p className={styles.ticketNote}>72 Total Seats Available</p>
          </>
        ) : null}
      </div>
      <p><br />
        Two days of Magic: The Gathering Cube drafts, with proceeds going to local mutual aid funds!
      </p>
      <p>
        $65 gets you entry into four Cube Drafts, two on Saturday and two on Sunday, hosted at Thymele Arts in Hollywood. There'll be snacks and prize pins and a lot of fun games. Come play some dang magic!
      </p>
	  <a href="https://bit.ly/P1P1SignUp" className={styles.largeButton}>
        Register For The Event
      </a>
      <a href="https://discord.com/invite/mGbrWenMKg" className={styles.largeButton}>
        Join the Discord Server
      </a>

      <hr className={styles.rule} />

      <Typography.SecondaryHeading>Location</Typography.SecondaryHeading>

      <div className={styles.location}>
        <p>
          <a href="https://www.thymelearts.com/">
            Thymele Arts
            <br />
            5481 Santa Monica Blvd.
            <br />
            East Hollywood, CA 90029
          </a>
        </p>

		<div className={styles.item}>

        <p className={styles.answer}>
          <br />Off-site parking is available for $10/Day, with access to bus and transit stops nearby.
		  <br />Street parking is available but sparse.
		  <br /><br />The venue is also accessible from the B-Line/Western and Vermont/Santa Monica metro stops, and is along the 207 and 4 bus lines.
        </p>
      </div>

      </div>
    </div>
  )
}
