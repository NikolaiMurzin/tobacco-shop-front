const getPathNameOfProduct = (slug: string, category: string, brand?: string): string => {
    slug = slug.toLowerCase()
    category = category.toLowerCase()
    if (brand) {
        brand = brand.toLowerCase()
    }
    let pathName: string
    if (brand) {
        pathName = category + '/' + brand + '/' + slug
    } else {
        pathName = category + '/' + slug
    }
    return pathName
}
export default getPathNameOfProduct