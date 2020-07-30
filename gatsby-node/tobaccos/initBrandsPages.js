module.exports = async ({ graphql, actions }) => {

  const path = require('path')
  const { createPage } = actions

  const getTobaccosBrandsQuery = require('./queries/tobaccosBrands')  
  const tobaccosBrandsQuery = await getTobaccosBrandsQuery(graphql)
  const getTobaccosQuery = require('./queries/tobaccos')  
  const tobaccosQuery = await getTobaccosQuery(graphql)

  tobaccosBrandsQuery.data.allWcProductsAttributes.nodes[0].attribute_options.forEach(async (option) => {

    let brandName = option.name
    const getPathNameOfBrand = require('../../helpers/getPathNameOfBrand')
    const pathName = getPathNameOfBrand('tobacco', brandName)

    let getProductsOfBrand = require('./../../helpers/getProductsOfBrand')
    let tobaccos = getProductsOfBrand(tobaccosQuery, brandName)

    createPage({
      path: pathName,
      component: path.resolve('./src/templates/tobaccoBrandPage.tsx'),
      context: {
        tobaccos
      }
    })
  })
}