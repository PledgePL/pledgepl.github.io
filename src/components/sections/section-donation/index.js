import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { CoreBox, CoreFlex, CoreGrid } from '../../core-box'
import Img from 'gatsby-image'
import Text from '../../text'
import ButtonCTA from '../../button-cta'
import Link from '../../../utils/gatsby-link'

const SectionDonation = () => {
  return (
    <StaticQuery
      query={graphql`
        query DonationQuery {
          aclu: file(name: { eq: "american-civil-liberties-union-logo" }) {
            childImageSharp {
              id
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          gateway: file(name: { eq: "gateway-womens-access-fund" }) {
            childImageSharp {
              id
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          yellowhammer: file(name: { eq: "yellowhammer-fund" }) {
            childImageSharp {
              id
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          nnaf: file(name: { eq: "national-network-of-abortion-funds" }) {
            childImageSharp {
              id
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ aclu, gateway, yellowhammer, nnaf }) => {
        const donationOrgs = [
          { image: aclu, name: 'American Civil Liberties Union', url: 'https://www.aclu.org' },
          {
            image: gateway,
            name: "Gateway Women's Access Fund",
            url: 'https://www.gwaf.org',
          },
          {
            image: yellowhammer,
            name: 'Yellowhammer Fund',
            url: 'https://yellowhammerfund.org',
          },
          {
            image: nnaf,
            name: 'National Network of Abortion Funds',
            url: 'https://abortionfunds.org',
          },
        ]

        return (
          <CoreBox bg="gamma" py={[6, 7]} px={[4, 5]} as="section">
            <Text
              color="beta"
              fontSize="beta"
              fontFamily="beta"
              textAlign="center"
              css={{ maxWidth: 800 }}
              mx="auto"
              mb={2}
              as="h2"
            >
              We support a women’s right to choose when it’s the right time for
              them to start a family.
            </Text>
            <Text
              color="beta"
              as="p"
              textAlign="center"
              mx="auto"
              mb={5}
              css={{ maxWidth: 800 }}
            >
              Please consider donating to one of the following charities:
            </Text>
            <CoreGrid
              gridTemplateColumns={['1fr', '1fr 1fr 1fr 1fr']}
              gridGap={[4, 3]}
              mx="auto"
              my={[4, 7]}
              alignItems="stretch"
              css={{ maxWidth: '800px', justifyItems: 'center' }}
            >
              {donationOrgs.map(({ image, name, url }) => {
                return (
                  <CoreGrid
                    gridTemplateColumns={['150px 150px', '1fr']}
                    gridGap={[4, 3]}
                    css={{ justifyItems: 'center' }}
                  >
                    <Link href={url} css={{ lineHeight: 0 }}>
                      <Img
                        fixed={image.childImageSharp.fixed}
                        fadeIn={false}
                        critical={true}
                        style={{
                          maxHeight: '100%',
                          minHeight: '100px',
                        }}
                        imgStyle={{
                          objectFit: 'contain',
                          objectPosition: 'center left',
                        }}
                        alt={name}
                      />
                    </Link>
                    <CoreFlex
                      flexDirection="column"
                      alignItems="flex-start"
                      justifyContent="center"
                      justifySelf={["flex-start", "center"]}
                      alignSelf={["center", "flex-end"]}
                      ml={[2, 0]}
                    >
                      <Text
                        color="beta"
                        as="p"
                        textAlign={["left", "center"]}
                      >
                        {name}
                      </Text>
                      <ButtonCTA href={url} size="xsmall" mt={[2, 3]} mx={[0, "auto"]}>
                        Donate
                      </ButtonCTA>
                    </CoreFlex>
                  </CoreGrid>
                )
              })}
            </CoreGrid>
          </CoreBox>
        )
      }}
    />
  )
}

SectionDonation.defaultProps = {}

export default SectionDonation
