import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import emotionNormalize from 'emotion-normalize'
import { Global, css } from '@emotion/core'

import theme, { baseFontSize } from '../styles/theme'
import Header from './header'
import SectionEmployeeCount from '../components/sections/section-employee-count'
import SectionFooter from '../components/sections/section-footer'

// Normalize.css
const globalStyles = css`
  ${emotionNormalize}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  html {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: ${(16 / baseFontSize) * 100}%;
  }
  ,
  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme.colors.delta};
    text-decoration: none;
  }
  a:hover {
    color: ${theme.colors.gamma};
    text-decoration: underline;
  }
`

const Layout = ({ children }) => (
  <>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Global
              styles={globalStyles}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <SectionEmployeeCount />
            <SectionFooter />
          </>
        </ThemeProvider>
      )}
    />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
