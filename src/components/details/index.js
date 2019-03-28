import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { CoreBox } from '../core-box'
import Text from '../text'

const Details = ({ chevronSrc, title, children, ...props }) => {
  const Summary = styled(Text)`
    cursor: pointer;
    position: relative;
    list-style-type: none;
    padding-left: 20px;
    outline: none;
    ::-webkit-details-marker {
      display: none;
    }
    :after {
      content: '';
      position: absolute;
      width: 13px;
      height: 23px;
      max-height: 100%;
      left: 0px;
      top: -1px;
    }
    :after {
      color: transparent;
      background-image: url(${chevronSrc});
      background-repeat: no-repeat;
      background-position: 50% 50%;
      transform-origin: 4px 50%;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
      transition-property: transform;
    }
    details[open] > &:after {
      transform: rotate(90deg);
    }
  `
  return (
    <CoreBox as="details" mb={[5, 6]} {...props}>
      <Summary
        color="theta"
        fontSize="epsilon"
        fontFamily="alpha"
        textAlign="left"
        as="summary"
      >
        {title}
      </Summary>
      <CoreBox mt={[3, 4]}>
        {React.Children.map(children, child => {
          return (
            <Text
              color="theta"
              fontSize="eta"
              fontFamily="alpha"
              mb={[2, 3]}
              {...child.props}
              as="p"
            />
          )
        })}
      </CoreBox>
    </CoreBox>
  )
}

Details.defaultProps = {
  title: null,
  children: null,
}

const ContentProvider = props => {
  return (
    <StaticQuery
      query={graphql`
        query ChevronQuery {
          chevron: file(name: { eq: "chevron" }) {
            publicURL
          }
        }
      `}
      render={data => (
        <Details {...props} chevronSrc={data.chevron.publicURL} />
      )}
    />
  )
}

export default ContentProvider
