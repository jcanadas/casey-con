import * as styles from './index.module.css'

import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'
import { Header } from 'src/components/layout/Header'
import { Schedule } from 'src/components/Schedule'
import { Footer } from 'src/components/Footer'
import { EventDetails } from 'src/components/EventDetails'
import { CubeList } from 'src/components/CubeList'
// import { LocalAmenities } from 'src/components/LocalAmenities'
import { FAQ } from 'src/components/FAQ'

const IndexPage: React.FC<PageProps<Queries.HomePageQuery>> = (props) => {
  const cubes = [...props.data.allCubesYaml.cubes]

  return (
    <Layout>
      <div className={styles.container}>
        <Header />

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

        <CubeList cubes={cubes} />

        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    allCubesYaml {
      cubes: nodes {
        name
        url
        designer
        designerURL
        imageURL
        description
      }
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>
        The Salt Box - A Two-Day Magic: The Gathering Cube Event in Baltimore,
        MD
      </title>

      <meta
        property="og:image"
        content="http://thesaltbox.fun/the-salt-box-og.png"
      />
      <meta property="og:image-width" content="1200" />
      <meta property="og:image-height" content="630" />

      <meta property="og:title" content="The Salt Box" />

      <meta
        name="description"
        content="A Two-Day Magic: The Gathering Cube Event in Baltimore, MD"
      />
      <meta
        property="og:description"
        content="A Two-Day Magic: The Gathering Cube Event in Baltimore, MD"
      />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
