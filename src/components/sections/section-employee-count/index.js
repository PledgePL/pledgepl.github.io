import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { CoreBox, CoreFlex } from '../../core-box'
import Text from '../../text'
import ButtonCTA from '../../button-cta'

const SectionEmployeeCount = ({ count, date }) => {
  const dateFormatOptions = { year: 'numeric', month: 'long' }

  return (
    <StaticQuery
      query={graphql`
        query EmployeeCountQuery {
          allGoogleSheetPartnersRow(filter: { active: { eq: true } }) {
            edges {
              node {
                id
                employeeCount
              }
            }
          }
        }
      `}
      render={data => {
        const employeeCount = data.allGoogleSheetPartnersRow.edges.reduce(
          (prev, next) => prev + next.node.employeeCount,
          0
        )
        return (
          <CoreBox bg="epsilon" py={[6, 7]} px={[4, 5]} as="section">
            <CoreBox css={{ maxWidth: 800 }} mx={'auto'}>
              <Text
                color="gamma"
                mb={3}
                fontSize="xl"
                fontFamily="beta"
                as="h1"
                textAlign="center"
              >
                {employeeCount.toLocaleString('en-US')} Employees
              </Text>
              <Text
                color="alpha"
                fontSize="delta"
                fontFamily="beta"
                textAlign="center"
                mb={5}
                as="p"
              >
                are covered under Pledge Parental Leave as of{' '}
                {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                  date
                )}
                . Is your company ready to make history?
              </Text>
              <CoreFlex flexDirection="column" alignItems="center">
                <CoreBox mb={1}>
                  <ButtonCTA href="/join-us">We're ready to join</ButtonCTA>
                </CoreBox>
                <CoreBox mt={1}>
                  <ButtonCTA href="/support" type="beta">
                    We have more questions
                  </ButtonCTA>
                </CoreBox>
              </CoreFlex>
            </CoreBox>
          </CoreBox>
        )
      }}
    />
  )
}

SectionEmployeeCount.defaultProps = {
  count: 5838,
  date: new Date(),
}

export default SectionEmployeeCount
