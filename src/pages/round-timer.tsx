import * as styles from './round-timer.module.css'

import * as React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'
import { compact } from 'lodash'

import { RoundTimer } from 'src/components/round-timer/RoundTimer'

const RoundTimerPage: React.FC<PageProps<Queries.RoundTimerPgeQuery>> = (
  props
) => {
  const cubes = props.data.allCubesYaml.cubes

  const cubeNames = React.useMemo(() => {
    return compact(cubes.map((cube) => cube.name))
  }, [cubes])

  return (
    <div className={styles.container}>
      <RoundTimer cubeNames={cubeNames} />
    </div>
  )
}

export const query = graphql`
  query RoundTimerPge {
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

export default RoundTimerPage
