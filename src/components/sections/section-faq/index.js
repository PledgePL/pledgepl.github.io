import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import Details from '../../details'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HR = styled(CoreBox)`
  border: none;
  height: 2px;
  margin-top: ${props => props.my || props.mt || props.m || 0};
  margin-bottom: ${props => props.my || props.mb || props.m || 0};
`

const SectionFAQ = data => {
  const graphCost =
    data && data.graphCost && data.graphCost.childImageSharp
      ? data.graphCost.childImageSharp
      : null
  const graphCoverage =
    data && data.graphCoverage && data.graphCoverage.childImageSharp
      ? data.graphCoverage.childImageSharp
      : null
  return (
    <CoreBox bg="beta" py={[6, 7]} px={[4, 5]} as="section">
      <Text
        color="theta"
        fontSize="alpha"
        fontFamily="beta"
        textAlign="center"
        css={{ maxWidth: 800 }}
        mx="auto"
        mb={7}
        as="h2"
      >
        Frequently Asked Questions
      </Text>
      <CoreGrid
        gridTemplateColumns={['1fr', '1fr', '1fr', 'auto 1fr']}
        gridColumnGap={[0, 0, 0, 7]}
        gridRowGap={[0]}
        mx="auto"
        css={{ maxWidth: '1200px' }}
      >
        <Text
          color="theta"
          fontSize="beta"
          fontFamily="beta"
          textAlign="left"
          mb={[5, 6]}
          as="h3"
        >
          Learn More About The Pledge
        </Text>
        <CoreBox mt={[0, 0, 0, 1]}>
          <Details title="What is Pledge Parental Leave?">
            <p>
              Pledge Parental Leave, or PPL, is a movement started by digital
              product studio ustwo in NYC to educate, help, and empower
              companies in the creative industry to offer a minimum set of
              guaranteed parental leave benefits for new parents, regardless of
              gender, adoption, fostering, or birth.
            </p>
            <p>
              For a company to meet the requirements, they must offer a minimum
              of 12 weeks of fully paid leave and 12 weeks of uninterrupted
              medical benefit coverage to the primary caregiver, in addition to
              guaranteeing their job security for six months, should they opt
              for extra time off to spend with their child. Companies must also
              pledge to publish their policies both internally and publicly.
            </p>
          </Details>
          <Details title="What is the purpose of each Pledge Parental Leave requirement?">
            <p>
              The fact that there is currently no federally mandated paid leave
              available for new parents drove us to think about what is a
              meaningful minimum we could ask companies to offer their
              employees. Studies have shown the first 12 weeks of a child’s life
              are crucial for familial bonding. For this reason we felt that 3
              months was a great starting point that companies can offer. We
              certainly encourage any company that can offer more paid time off
              to do so!
            </p>

            <p>
              We also believe that while on parental leave, no new parent should
              have to worry about having to return to work out of fear of losing
              their medical insurance. Agreeing to continue medical benefits for
              new parents on leave is one simple way that employers can assure
              their employees that they are taken care of during this time in
              their lives.
            </p>

            <p>
              Job security is often cited as one of the main reasons new parents
              return to work sooner than they would like, sometimes as quickly
              as two weeks after their child is born. The Family Medical Leave
              Act (FMLA) helps guarantee job security for some new parents, but
              not every new parent qualifies. The Pledge felt that by including
              job security as a part of our minimum requirements, companies are
              stating to their employees that they value their families and
              lives outside of work, and want employees to be able to take
              additional time off without worrying about losing their job.
            </p>
          </Details>
          <Details title="Why is target/focus on the creative industry?">
            <p>
              Historically, the creative industry (not only in the United
              States, but across the world) has had the reputation of a terrible
              work/life balance. 80 hour work weeks and bending over backward
              for client work is the norm in many agencies, so when it comes to
              parental leave, even if a policy is in place, the taboo behind
              actually taking time off as new parents is strong. Pledge Parental
              Leave is tackling the creative industry first for these reasons,
              with a focus on ensuring policies are made public and the taboo is
              dispelled. It’s a small step, but we’re proud to be taking it with
              a group of partners who believe it’s the right thing to do.
            </p>
          </Details>
          <Details
            title="What is the end goal of Pledge Parental Leave?"
            mb={0}
          >
            <p>
              Changing the future of parenting in the United States may be a
              lofty goal, but it’s certainly one we aspire to. In the more
              immediate future, our goal is to inspire and help as many
              private-sector creative companies as possible, of all sizes, both
              in New York and beyond to reevaluate and change their parental
              leave policies to meet our minimum standards.
            </p>
          </Details>
        </CoreBox>
        <CoreBox
          gridColumn={[
            'auto / span 1',
            'auto / span 1',
            'auto / span 1',
            'auto / span 2',
          ]}
        >
          <HR as="hr" my={[6, 7]} bg="epsilon" />
        </CoreBox>
        <Text
          color="theta"
          fontSize="beta"
          fontFamily="beta"
          textAlign="left"
          mb={[5, 6]}
          as="h3"
        >
          Get Benefits For My Company
        </Text>
        <CoreBox mt={[0, 0, 0, 1]}>
          <Details title="How does the Pledge Parental Leave application process work?">
            <p>
              Each company interested in joining the Pledge simply emails us a
              copy of their Policy. If the policy meets the Pledge
              qualifications, we ask you to commit to posting your policy
              publicly. If the policy doesn’t meet the Pledge qualifications, we
              will give you suggestions for adjusting it. We also have a
              template policy in our toolkit for you to use. Once a company is
              an official Partner, we will add their logo to the website. New
              Partner Companies are added quarterly.
            </p>
          </Details>
          <Details title="How can our company afford to offer these benefits?">
            <p>
              The most common argument against company-paid parental leave is
              that it’s too expensive for businesses to provide. Turns out,
              that’s not actually true.
            </p>
            <p>
              We took the estimated costs of paid leave for an employee with a
              salary of $100k and compared that to the cost, both in time and
              money, that it takes to recruit and replace an employee.
            </p>
            <p>
              <GatsbyImage image={getImage(graphCost)} fadeIn={true}
                critical={false}
                alt="Graph of the cost of parental leave"
                style={{
                  maxWidth: '500px',
                }} />
            </p>
            <p>
              As you can see, the cost to recruit and replace an employee is
              about $20k more than providing paid leave. If it actually costs
              less to provide paid leave, it’s common sense that a company go
              that route. Afterall, who wants to spend 500 hours recruiting,
              onboarding, and training a replacement?
            </p>
          </Details>
          <Details title="What does short-term disability have to do with parental leave?">
            <p>
              Currently in the US, the only access some parents have to paid
              parental leave is short-term disability. Based on the same example
              salary we used previously, we’ve illustrated how employers can
              help control their costs of paid leave by topping up any
              short-term disability payments to qualified employees.
            </p>
            <p>
              <GatsbyImage image={getImage(graphCoverage)} fadeIn={true}
                critical={false}
                alt="Graph of the short-term disability coverage"
                style={{
                  maxWidth: '500px',
                }} />
            </p>
            <p>
              Qualification depends on a employer’s insurance policy carrier’s
              restrictions and will vary in terms of pay, length of leave, and
              other specifications. Some states have state-supported short term
              disability benefits as well.
            </p>
          </Details>
          <Details title="We’re starting from scratch. Can you help?">
            <p>
              Absolutely! We’ve put together a Toolkit to help make it as easy
              as possible for companies join the Pledge. If our FAQs and toolkit
              still don’t quite answer your questions, feel free to reach out to
              our team at{' '}
              <a href="mailto:team@pledgepl.org">team@pledgepl.org</a>
            </p>
          </Details>
          <Details title="What is a primary caregiver? What about a secondary caregiver?">
            <p>
              "Primary Caregiver" refers to the parent who has the
              majority responsibility for the care of the child for a
              significant part of the day during a regular work week. Primary
              caregivers can be any parent, and this term applies to anyone
              adopting, giving birth, utilizing a surrogate, etc.
            </p>
            <p>
              Secondary caregivers are the supporting parent that does not
              handle a majority of the responsibilities associated with
              parenting during a regular work week.
            </p>
          </Details>
          <Details title='How does "job security" work?'>
            <p>
              FMLA (Family Medical Leave Act) protects a person’s job for up to
              12 weeks, but only for employees that work for companies that
              qualify for it. Employees that work for companies with less than
              50 employees do not fall under FMLA’s regulations. Additionally,
              families that adopt a child or use a surrogate, also do not
              qualify for FMLA.
            </p>
            <p>
              As a result, offering 6 months job security to employees,
              regardless of FMLA, ensures that primary caregivers take the time
              they need to care for their child without having to worry about
              losing their job. Companies agree to return the employee to the
              same or similar position, as long as they were in good standing
              with the company at the time they took their parental leave.
            </p>
          </Details>

          <Details title="What parental leave state regulations should I know about?">
            <p>
              Currently, only 3 states in the US have laws around paid parental
              leave(not related to disability leave): California, New Jersey,
              and Rhode Island.
            </p>
            <p>
              Earlier this year, New York became the fourth state in the nation
              to pass legislation mandating paid parental leave. NY’s plan takes
              effect on January 1, 2018 will ramp up over time. New Yorkers will
              have access to 50% paid time off for 8 weeks in 2018 and by 2021
              the law will allow for 67% paid leave for 10 weeks.
            </p>
            <p>
              Washington state's legislators have had a proposed bill for paid
              family leave in their laps, but it is yet to be passed.
            </p>
          </Details>
        </CoreBox>
      </CoreGrid>
    </CoreBox>
  )
}

SectionFAQ.defaultProps = {}

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          graphCost: file(name: { eq: "graph-cost" }) {
            childImageSharp {
              id
              gatsbyImageData
            }
          }
          graphCoverage: file(name: { eq: "graph-coverage" }) {
            childImageSharp {
              id
              gatsbyImageData
            }
          }
        }
      `}
      render={SectionFAQ}
    />
  )
}
