module.exports = async ( {graphql, actions} ) => {

    const path = require('path')
    const { createPage } = actions

    const getTobaccosQuery = require('./queries/tobaccos')
    const tobaccosQuery = await getTobaccosQuery(graphql)

    tobaccosQuery.data.allWcProducts.nodes.forEach((node) => {

        const getPathName = require('./../../helpers/getPathNameOfProduct')
        const pathName = getPathName(node)

        createPage({
        path: pathName,
        component: path.resolve('./src/templates/tobaccoProductPage.tsx'),
        context: {
            id: node.id,
            name: node.name,
            pathName,
        }
        })
    })
}