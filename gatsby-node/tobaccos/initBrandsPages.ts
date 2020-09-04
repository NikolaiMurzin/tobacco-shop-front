import getPathNameOfBrand from './../../helpers/getPathNameOfBrand'
import { getTobaccosBrands } from './getters/getTobaccosBrands'
import { getTobaccos } from './getters/getTobaccos'
 
const initBrandsPages = async ({ graphql, actions }) => {


  const tobaccosBrands: string[] = await getTobaccosBrands(graphql)
  const tobaccos = await getTobaccos(graphql)

  // for each brand create page with tobaccos of this brand
  tobaccosBrands.forEach(async (brand: string) => {

      const pathName = getPathNameOfBrand('tobacco', brand)
      const tobaccosOfThisBrand = tobaccos.filter((product) => {
        return product.brand.toLowerCase() === brand.toLowerCase()
      })

      const path = require('path')
      const { createPage } = actions
      createPage({
        path: pathName,
        component: path.resolve('./src/templates/tobaccoBrandPage.tsx'),
        context: {
          brand,
          products: tobaccosOfThisBrand,
        }
      })
  })
}

export default initBrandsPages