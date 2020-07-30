
module.exports = async ({ graphql, actions }) => {

  const path = require('path')

  const { createPage } = actions


  // create each tobacco page section

  const initEachTobaccoPage = require('./tobaccos/initEachProductPage')
  initEachTobaccoPage({ graphql, actions })

  // create brand tobacco pages section
  const initBrandsPages = require('./tobaccos/initBrandsPages')
  initBrandsPages({ graphql, actions })

  // tobacco main page section

  const initMainPage = require('./tobaccos/initMainPage')
  initMainPage({ graphql, actions })
}