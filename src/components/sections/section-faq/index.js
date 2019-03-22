import React from 'react'
import { CoreBox, CoreGrid } from '../../core-box'
import Text from '../../text'
import Details from '../../details'

const SectionFAQ = ({}) => {
  return (
    <CoreBox bg="beta" py={[6, 7]} px={[4, 5]} as="section">
      <CoreBox mb={7}>
        <Text
          color="theta"
          fontSize="alpha"
          fontFamily="beta"
          textAlign="center"
          css={{ maxWidth: 800 }}
          mx="auto"
          as="h2"
        >
          Frequently Asked Questions
        </Text>
      </CoreBox>
      <Details title="What is Pledge Parental Leave?">
        <p>
          Pledge Parental Leave, or PPL, is a movement started by digital
          product studio ustwo in NYC to educate, help, and empower companies in
          the creative industry to offer a minimum set of guaranteed parental
          leave benefits for new parents, regardless of gender, adoption,
          fostering, or birth.
        </p>
        <p>
          For a company to meet the requirements, they must offer a minimum of
          12 weeks of fully paid leave and 12 weeks of uninterrupted medical
          benefit coverage to the primary caregiver, in addition to guaranteeing
          their job security for six months, should they opt for extra time off
          to spend with their child. Companies must also pledge to publish their
          policies both internally and publicly.
        </p>
      </Details>
      <Details title="What is the purpose of each Pledge Parental Leave requirement?">
        <p>
          The fact that there is currently no federally mandated paid leave
          available for new parents drove us to think about what is a meaningful
          minimum we could ask companies to offer their employees. Studies have
          shown the first 12 weeks of a child’s life are crucial for familial
          bonding. For this reason we felt that 3 months was a great starting
          point that companies can offer. We certainly encourage any company
          that can offer more paid time off to do so!
        </p>

        <p>
          We also believe that while on parental leave, no new parent should
          have to worry about having to return to work out of fear of losing
          their medical insurance. Agreeing to continue medical benefits for new
          parents on leave is one simple way that employers can assure their
          employees that they are taken care of during this time in their lives.
        </p>

        <p>
          Job security is often cited as one of the main reasons new parents
          return to work sooner than they would like, sometimes as quickly as
          two weeks after their child is born. The Family Medical Leave Act
          (FMLA) helps guarantee job security for some new parents, but not
          every new parent qualifies. The Pledge felt that by including job
          security as a part of our minimum requirements, companies are stating
          to their employees that they value their families and lives outside of
          work, and want employees to be able to take additional time off
          without worrying about losing their job.
        </p>
      </Details>
    </CoreBox>
  )
}

SectionFAQ.defaultProps = {}

export default SectionFAQ
