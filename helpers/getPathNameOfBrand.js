module.exports = (category, brand) => {
    category = category.toLowerCase()
    brand = brand.split(' ').join('-').toLowerCase()
    const pathName = category + '/' + brand
    return pathName
}