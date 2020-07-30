/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/*jslint es6 */

// You can delete this file if you're not using it
const initTobaccoPages = require('./gatsby-node/initTobaccoPages')

// create tobaccos for each product pages, tobaccos brand pages, main tobacco page

exports.createPages = async ({ graphql, actions }) => {
  initTobaccoPages({ graphql, actions })
}

// create hookah products pages, hookah brands pages