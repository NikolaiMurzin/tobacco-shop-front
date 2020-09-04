module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of WordPress site
        api: 'kizilov-group-test.ru/index.php',
        // true if using https. false otherwise.
        https: false,
        api_keys: {
          consumer_key: `ck_584cc67037504315f5419b42776d9b980d37a27f`,
          consumer_secret: `cs_324b4202a36b357a60749264202225e06cc42196`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes'],
      }
    },
  ],
}
