module.exports = (productsQuery, brand) => {

        let products = productsQuery.data.allWcProducts.nodes.filter((node) => {

            let brandAttribute = node.attributes.filter(attr => attr.name.includes('Brand'))
            // if we have brand
            if (brandAttribute.length != 0) {
                // if tobacco has this brandName then pass it to array
                return brandAttribute[0].options[0] === brand
            } else {
                return false
            }
        })
        return products
}