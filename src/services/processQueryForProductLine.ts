import getPathNameOfProduct from '../../helpers/getPathNameOfProduct'

interface productsQuery{
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
interface product {
    id: string
    name: string
    price: string
    pathName: string
    imageSrc: string
    weights: string[]
    brand: string,
    wordpress_id: string
    category: string
}
const queryToProducts = (productsQuery: productsQuery) : product[]=> {
                        
                        let products = productsQuery.allWcProducts.nodes.map((node) => {
                            let product: product = {
                                id: undefined,
                                name: undefined,
                                price: undefined,
                                pathName: undefined,
                                imageSrc: undefined,
                                weights: undefined,
                                brand: undefined,
                                wordpress_id: undefined,
                                category: undefined,
                            }
                            product.id = node.id
                            product.name = node.name
                            product.price = node.price
                            if (node.images[0]) {
                                product.imageSrc = node.images[0].localFile.childImageSharp.resize.src
                            }
                            let weightAttributes = node.attributes.filter((attr) => {
                                return attr.name === 'weight'
                            })
                            if (weightAttributes.length != 0) {
                                product.weights = weightAttributes[0].options
                            }
                            let brandAttribute = node.attributes.filter(attr => attr.name.includes('Brand'))
                            if (brandAttribute.length != 0) {
                                product.brand= brandAttribute[0].options[0].toLowerCase()
                            }
                            if (node.categories[0].name) {
                                product.category = node.categories[0].name
                            }
                            product.pathName = getPathNameOfProduct(node.slug, product.category, product.brand)
                            return product
                        })

                        return products
}
export default queryToProducts 