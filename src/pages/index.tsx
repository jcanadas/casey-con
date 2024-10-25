import * as styles from './index.module.css'

import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'
import { Logo } from 'src/components/Logo'
import { Schedule } from 'src/components/Schedule'
import { Footer } from 'src/components/Footer'
import { EventDetails } from 'src/components/EventDetails'
// import { CubeList } from 'src/components/CubeList'
// import { LocalAmenities } from 'src/components/LocalAmenities'
import { FAQ } from 'src/components/FAQ'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.headerDetails}>
            <div>
              A Two-Day <em>Magic: The Gathering</em> Cube Event in Baltimore,
              MD
            </div>
            <p>March 8 - 9, 2025</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <EventDetails />

          <div className={styles.schedule}>
            <Schedule />
          </div>
        </div>

        <div className={styles.secondaryContent}>
          <FAQ />
        </div>

        {/* <LocalAmenities /> */}

        {/* <CubeList /> */}

        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>The Salt Box</title>
      <meta
        name="description"
        content="A Two-Day Magic: The Gathering Cube Event in Baltimore, MD"
      />
    </>
  )
}
