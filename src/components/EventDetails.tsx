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
              <a href="https://www.eventbrite.com/e/the-salt-box-tickets-1057472070429?aff=oddtdtcreator">
                View Details on EventBrite
              </a>
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsug9tBx0yQudhn-Cq4ToiJXVb3iecCV0RfiGz3uuvxZKcXg/viewform"
              className={styles.largeButton}
            >
              Join Waitlist
            </a>
          </div>
        ) : eventState === 'ticket-sales' ? (
          <>
            <a
              href="https://www.eventbrite.com/e/the-salt-box-tickets-1057472070429?aff=oddtdtcreator"
              className={styles.buyButton}
            >
              Buy Tickets - $45
            </a>
            <p className={styles.ticketNote}>72 Total Seats Available</p>
          </>
        ) : null}
      </div>

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
      </div>

      <p>
        Two days of Magic: The Gathering Cube drafts, with proceeds going to local mutual aid funds!
      </p>
      <p>
        $65 gets you entry into four Cube Drafts, two on Saturday and two on Sunday, hosted at Thymele Arts in Hollywood. There'll be snacks and prize pins and a lot of fun games. Come play some dang magic!
      </p>
      <p>
        Register for a ticket here: https://bit.ly/P1P1SignUp
      </p>
    </div>
  )
}
