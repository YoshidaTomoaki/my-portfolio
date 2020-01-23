/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
import Helmet from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"

function SEO({ description = '', lang = 'ja', meta = [], title = '' }) {
    /*
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
*/
  return (
    <Helmet
      htmlAttributes={
        'ja'
      }
      title='Yda Works'
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
      ].concat(meta)}
    />
  )
}
/*
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
*/

export default SEO