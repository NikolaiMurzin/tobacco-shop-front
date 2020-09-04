import getProductsOfEachBrands from './helpers/getProductsOfEachBrand'
import { getTobaccosBrands } from './getters/getTobaccosBrands'
import { getTobaccos } from './getters/getTobaccos'

const initMainPage = async ({ graphql, actions }) => {

  const path = require('path')
  const { createPage } = actions

  const tobaccosBrands: string[] = await getTobaccosBrands(graphql)

  const tobaccos = await getTobaccos(graphql)
  const tobaccosOfEachBrands = getProductsOfEachBrands(tobaccos, tobaccosBrands)

  createPage({
    path: 'tobacco',
    component: path.resolve('./src/templates/tobaccoMainPage.tsx'),
    context: {
        tobaccosOfEachBrands
    }
  })

}

export default initMainPage