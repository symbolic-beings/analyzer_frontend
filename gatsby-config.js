/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-custom`,
      options: {
        socketUrl: process.env.SOCKET_URL,
      }
    }
  ],
}
