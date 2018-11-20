import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(name: { eq: "pledgepl-logo-white" }) {
          childImageSharp {
            id
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.file.childImageSharp.fixed} fadeIn={false} critical={true} />}
  />
)
