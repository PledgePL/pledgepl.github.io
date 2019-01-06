import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { CoreFlex } from '../core-box'
import Link from '../../utils/gatsby-link'

const ImgLink = styled(CoreFlex)`
  background-color: transparent;
  height: 100%;
`.withComponent(Link)
const Logo = ({ type, size }) => {
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          file(name: { eq: "pledgepl-logo-white" }) {
            childImageSharp {
              id
              fixed(height: 56) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          allFile(
            filter: {
              name: { regex: "/pledgepl-logo-white|pledgepl-logo-purple/" }
            }
          ) {
            edges {
              node {
                id
                name
                childImageSharp {
                  id
                  large: fixed(height: 56) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                  small: fixed(height: 43) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        let logoPathEq
        switch (type) {
          case 'white':
            logoPathEq = 'pledgepl-logo-white'
            break
          case 'purple':
            logoPathEq = 'pledgepl-logo-purple'
            break
          default:
            logoPathEq = null
        }

        const fileEdge = data.allFile.edges.find(
          _ => _.node.name === logoPathEq
        )
        const file = fileEdge ? fileEdge.node : null

        if (!logoPathEq || !file) {
          return null
        }

        const src =
          size === 'large'
            ? file.childImageSharp.large
            : file.childImageSharp.small

        return (
          <ImgLink href="/">
            <Img
              fixed={src}
              fadeIn={false}
              critical={true}
              style={{
                maxHeight: '100%',
              }}
              imgStyle={{
                objectFit: 'contain',
                objectPosition: 'center left',
              }}
            />
          </ImgLink>
        )
      }}
    />
  )
}

Logo.defaultProps = {
  type: 'white',
  size: 'large',
}

export default Logo
