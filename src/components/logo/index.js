import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class Logo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      opacity: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 1
      })
    }, 1000)
    
  }

  render() {
    return (
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
        render={data => {
          console.log('render logo')
          return (
            <Img
              fixed={data.file.childImageSharp.fixed}
              fadeIn={false}
              critical={true}
              style={{opacity: this.state.opacity,transition: "opacity 1s linear 1s"}}
            />
          )
        }}
      />
    )
  }
}
