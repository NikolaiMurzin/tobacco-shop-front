const { graphql } = require("gatsby");

module.exports = async (graphql) => {

    return await graphql(`
      query  tobaccosQuery {
          allWcProducts(filter: {categories: {elemMatch: {name: {eq: "tobacco"}}}}){
              nodes {
                id
                name
                price
                slug
                attributes {
                  options
                  name
                }
                categories {
                  name
                }
                images{
                  src
                }
              }
          }
        }
    `)

}