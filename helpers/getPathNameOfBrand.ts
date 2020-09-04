import getPathNameOfProduct from "./getPathNameOfProduct"

const getPathNameOfBrand = (category: string, brand: string) : string => {
    category = category.toLowerCase()
    brand = brand.split(' ').join('-').toLowerCase()
    const pathName: string = category + '/' + brand
    return pathName
}

export default getPathNameOfBrand