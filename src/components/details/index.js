import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { CoreBox } from '../core-box'
import Text from '../text'





const Details = ({ chevronSrc, title, children, ...props }) => {
    const Summary = styled(Text)`
    list-style-image: url(${chevronSrc});
    cursor: pointer;
    ::-webkit-details-marker {
        color: transparent;
        content: "";
        background-image: url(${chevronSrc});
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        transform-origin: 50% 50%;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.445,.05,.55,.95);
        transition-property: transform;
    }
    details[open] > &::-webkit-details-marker {
        transform: rotate(90deg);
    }
`
  return (
    <CoreBox as="details" mb={[5,6]} {...props}>
      <Summary
        color="theta"
        fontSize="epsilon"
        fontFamily="alpha"
        textAlign="left"
        mb={[3, 4]}
        as="summary"
      >
        {title}
      </Summary>
      {React.Children.map(children, child => {
        return (
          <Text
            color="theta"
            fontSize="eta"
            fontFamily="alpha"
            {...child.props}
            as="p"
          />
        )
      })}
    </CoreBox>
  )
}

Details.defaultProps = {
  title: null,
  children: null,
}

const ContentProvider = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query ChevronQuery {
            chevron: file(name: { eq: "chevron" }) {
                publicURL
            }
          }
        `}
        render={data => {
            console.log("data",data.chevron.publicURL)
            return <Details {...props} chevronSrc={data.chevron.publicURL} />
        }} />
    )
}

export default ContentProvider
