/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simply Synth`,
        short_name: `SimplySynth`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/images/piano.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
