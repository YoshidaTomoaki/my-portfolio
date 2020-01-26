import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
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
        <>
          <Helmet
            htmlAttributes={
              'ja'
            }
            title={data.site.siteMetadata.title}
            titleTemplate={`%s | Yda Works`}
            meta={[
              {
                name: `description`,
                content: 'Programming & Music & Movie',
              },
              {
                property: `og:title`,
                content: 'Yda Works',
              },
              {
                property: `og:description`,
                content: 'Programming & Music & Movie',
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: 'Tomoaki Yoshida',
              },
              {
                name: `twitter:title`,
                content: 'Yda Works',
              },
              {
                name: `twitter:description`,
                content: 'Programming & Music & Movie',
              },
              {
                name: `og:image`,
                content: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-a7b14.appspot.com/o/ydasworksOGP.jpg?alt=media&token=b5374a60-e1c3-4062-b657-0a14dc6f94f1',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
