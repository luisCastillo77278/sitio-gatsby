module.exports = {
  siteMetadata: {
    title: `mi sitio web en gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "Castillo Luis"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
        ignore: ['**/\.*']
      }
    }
  ],
}
