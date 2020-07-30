module.exports = async ({ graphql, actions }) => {

  const path = require('path')
  const { createPage } = actions

  const getTobaccosQuery = require('./queries/tobaccos')
  const getTobaccosBrandsQuery = require('./queries/tobaccosBrands')


  const tobaccosQuery = await getTobaccosQuery(graphql)
  const tobaccosBrandsQuery = await getTobaccosBrandsQuery(graphql)

  const getProductsOfEachBrands = require('./../../helpers/getProductsOfEachBrand')
  let tobaccosOfEachBrands = getProductsOfEachBrands(tobaccosQuery, tobaccosBrandsQuery)

  createPage({
    path: 'tobacco',
    component: path.resolve('./src/templates/tobaccoMainPage.tsx'),
    context: {
        tobaccosOfEachBrands
    }
  })

}