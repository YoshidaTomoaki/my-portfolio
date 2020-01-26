module.exports = {
  pathPrefix: "/my-portfolio",
  siteMetadata: {
    title: "Yda Works",
    author: "Tomoaki Yoshida",
    description: "My Portfolio web site."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon-personal.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
