interface tobaccosBrandsQuery {
    data: {
      allWcProductsAttributes: {
        nodes: {
          attribute_options: {
            name: string
          }[]
          name: string
        }[]
      }
    }
}
const getTobaccosBrandsQuery = async (graphql) : Promise<tobaccosBrandsQuery> => {
    return await graphql(`
      query MyQuery {
        allWcProductsAttributes(filter: {name: {eq: "TobaccoBrand"}}) {
          nodes {
            attribute_options {
              name
            }
            name
          }
        }
      }
    `)
}
const getTobaccosBrands = async (graphql) => {
    const tobaccosBrandsQuery = await getTobaccosBrandsQuery(graphql)
    const tobaccosBrands: string[] = tobaccosBrandsQuery.data
      .allWcProductsAttributes.nodes[0]
      .attribute_options.map((option) => option.name)
    return tobaccosBrands
}
export {getTobaccosBrands}