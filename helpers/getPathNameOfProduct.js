// return pathName of product, 

// if product have brand then path will be:
// /productCategory/brandName/productSlug/

// if product don't have brand then path will be:
// /productCategory/productSlug/

// need to pass node with fields:
// {
//               slug
//               attributes {
//                  options
//                  name
//               }
//               categories {
//                 name
//               }
// }

module.exports = (product) => {

    let pathName = product.categories[0].name + '/' + product.slug
    let  brandAttribute = product.attributes.filter(attr => attr.name.includes('Brand'))
    if (brandAttribute.length != 0) {
        let brandName = brandAttribute[0].options[0].toLowerCase()
        brandName = brandName.split(' ').join('-')
        pathName = product.categories[0].name + '/' + brandName + '/' + product.slug
    }
    return pathName
}