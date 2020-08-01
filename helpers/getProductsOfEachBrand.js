module.exports = (productsQuery, productsBrandsQuery) => {

    let productWithBrands = [] 

    productsBrandsQuery.data.allWcProductsAttributes.nodes[0].attribute_options.forEach(async (option) => {

        let brandName = option.name

        // get tobaccos of this brand
        const getProductsOfBrand = require('./getProductsOfBrand')
        const products = getProductsOfBrand(productsQuery, brandName)
        productWithBrands.push({ brand: option.name,  products })
    })

    return productWithBrands
}