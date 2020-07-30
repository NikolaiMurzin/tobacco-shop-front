const { graphql } = require("gatsby");

module.exports = async (graphql) => {

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