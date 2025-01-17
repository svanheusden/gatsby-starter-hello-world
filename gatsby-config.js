/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Title from siteMetadata',
 },
 plugins: [
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: '${__dirname}/src/',
      },
    },
  'gatsby-transformer-remark'
 
 ],
}
