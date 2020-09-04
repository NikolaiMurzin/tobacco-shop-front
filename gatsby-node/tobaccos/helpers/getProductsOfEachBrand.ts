interface productsOfBrand {
    brand: string
    products: product[]
}
interface product{
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
const getProductsOfEachBrand = 
    (products: product[], brands: string[]): productsOfBrand[] => {

        let productsWithBrands: productsOfBrand[] = []

        brands.forEach((brand) => {
            const productsOfThisBrand: product[] = products.filter((product) => {
                        return product.brand.toLowerCase() === brand.toLowerCase()
                    })

            let productsOfBrand: productsOfBrand = {brand, products: productsOfThisBrand}        

            productsWithBrands.push(productsOfBrand)
        })

        return productsWithBrands
}
export default getProductsOfEachBrand