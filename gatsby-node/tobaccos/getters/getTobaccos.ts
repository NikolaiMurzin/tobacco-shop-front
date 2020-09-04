interface tobaccosQuery {
    data: {
        allWcProducts: {
            nodes: {
                id: string
                wordpress_id: number,
                name: string
                price: string
                slug: string
                attributes: {
                    options: string[]
                    name: string
                }[]
                categories: {
                    name: string
                }[]
                images: {
                    src: string
                    localFile: {
                        childImageSharp: {
                            resize: {
                                src: string,
                                height: number
                                width: number
                            }
                        }
                    }
                }[]
            }[]
        
        }
    }
}

const getTobaccosQuery = async (graphql): Promise<tobaccosQuery> => {
      return await graphql(`
            query  tobaccosQuery {
                allWcProducts(filter: {categories: {elemMatch: {name: {eq: "tobacco"}}}}){
                    nodes {
                      id
                      wordpress_id
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
                        localFile {
                          childImageSharp {
                            resize(width: 200, height: 200, jpegQuality: 10) {
                              src
                              height
                              width
                            }
                            }
                        }
                      }
                    }
                }
              }
          `)
}

import getPathNameOfProduct from '../../../helpers/getPathNameOfProduct'

interface tobacco {
    id: string
    name: string
    slug: string
    price: string
    pathName: string
    imageSrc: string
    weights: string[]
    brand: string,
    wordpress_id: string
    category: string
}

const getTobaccos = async (graphql): Promise<tobacco[]> => {
      const tobaccosQuery = await getTobaccosQuery(graphql)
      let tobaccos = tobaccosQuery.data.allWcProducts.nodes.map((node) => {
          let tobacco: tobacco = {
              id: undefined,
              name: undefined,
              slug: undefined,
              price: undefined,
              pathName: undefined,
              imageSrc: undefined,
              weights: undefined,
              brand: undefined,
              wordpress_id: undefined,
              category: undefined,
          }
          tobacco.id = node.id
          tobacco.name = node.name
          tobacco.price = node.price
          if (node.images[0]) {
              tobacco.imageSrc = node.images[0].localFile.childImageSharp.resize.src
          }
          let weightAttributes = node.attributes.filter((attr) => {
              return attr.name === 'weight'
          })
          if (weightAttributes.length != 0) {
              tobacco.weights = weightAttributes[0].options
          }
          let brandAttribute = node.attributes.filter(attr => attr.name.includes('Brand'))
          if (brandAttribute.length != 0) {
              tobacco.brand= brandAttribute[0].options[0].toLowerCase()
          }
          if (node.categories[0].name) {
              tobacco.category = node.categories[0].name
          }
          tobacco.slug = node.slug
          tobacco.pathName = getPathNameOfProduct(tobacco.slug, tobacco.category, tobacco.brand)
          return tobacco
        })
      return tobaccos
}

export {getTobaccos}