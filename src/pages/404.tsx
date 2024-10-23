import * as styles from './404.module.css'

import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'

import { Layout } from 'src/components/layout/Layout'

import * as Typography from 'src/components/general/Typography'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Typography.PrimaryHeading>
          404: Page not found
        </Typography.PrimaryHeading>
        <p>
          <Link to="/">Back home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
