import getPathNameOfProduct from './../../helpers/getPathNameOfProduct'
import { getTobaccos } from './getters/getTobaccos'

const initEachProductPage = async ({graphql, actions}) => {

    const path = require('path')
    const { createPage } = actions

    const tobaccos = await getTobaccos(graphql)

    tobaccos.forEach((tobacco) => {

        createPage({
            path: getPathNameOfProduct(tobacco.slug, tobacco.brand, tobacco.category),
            component: path.resolve('./src/templates/tobaccoProductPage.tsx'),
            context: {
                id: tobacco.id,
                name: tobacco.name,
                pathName: getPathNameOfProduct(tobacco.slug, tobacco.brand, tobacco.category),
            }
        })
    })
}
export default initEachProductPage