import React from 'react'
import { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import * as JsSearch from 'js-search'
import './search.sass'

interface product {
    name: string,
    id: string,
    slug: string,
    images: productImage[]
    attributes: productAttribute[],
    categories: productCategory[],
}
interface productAttribute {
    name: string,
    options: string[]
}
interface productCategory {
    name: string
}
interface productImage {
    src: string
}

const Search = () => {

    let  productsQuery = useStaticQuery(
        graphql`
            query productsQuery{
            allWcProducts(filter: {}) {
                nodes {
                name
                id
                slug
                images {
                    src
                }
                attributes {
                    name
                    options
                }
                categories {
                    name
                }
                }
            }
            }
        `
    )
    let [ searchResult, setSearchResult ] = useState<productForSearch[]>([])
    let [ searchQuery, setSearchQuery ] = useState("")
    let [ search, setSearch ]: any = useState({})

    useEffect(() => {
        const search = new JsSearch.Search("isbn")
        search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
        search.sanitizer = new JsSearch.LowerCaseSanitizer()
        search.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
        search.addIndex("name") // sets the index attribute for the data

        let productList: product[] = productsQuery.allWcProducts.nodes

        const processedProducts: productForSearch[] = processProductsForSearch(productList)
        search.addDocuments(processedProducts) // adds the data to be searched
        setSearch(search)
    }, [])

    const searchData = (e) => {
        setSearchQuery(e.target.value)
        const queryResult = search.search(e.target.value)
        setSearchResult(queryResult)
    }
    return <div className="search">
                <input
                    className="search__input montserrat_regular"
                    onChange={searchData}
                    placeholder="поиск"
                />
                <div 
                    className="search__resultsWrap"
                    >{searchResult.map((product) => {
                    return (
                        <Link
                            className="search__link montserrat_regular"
                            to={'/' + product.pathName}
                            >
                            {product.name}
                        </Link>
                    )
                })}</div>
            </div>
}




interface productForSearch{
    name: string,
    pathName: string,
    imgUrl: string,
    isbn: string,
}

const processProductsForSearch = (productsList: product[]): productForSearch[] => {

    let newProductList: productForSearch[] = []
    productsList.forEach((product: product) => {

        let newProduct: productForSearch = {name: "", pathName: "", imgUrl: "", isbn: "",}
        newProduct.name = product.name
        newProduct.pathName = product.categories[0].name + '/' + product.slug
        if (product.images[0] != undefined) {
            newProduct.imgUrl = product.images[0].src
        }
        let isbn = Math.floor(Math.random() * Math.floor(10000000000))
        newProduct.isbn = isbn.toString()

        let brandAttribute = product.attributes.filter((attr) => attr.name.includes('Brand'))
        if (brandAttribute.length != 0) { // if we have brand attribute on product then change his pathname and name
            let brandName = brandAttribute[0].options[0].toLowerCase()
            brandName = brandName.split(' ').join('-')
            newProduct.pathName = product.categories[0].name + '/' + brandName + '/' + product.slug
            newProduct.name = brandName + ' ' + product.name
        }

        newProductList.push(newProduct)
    })

    return newProductList
}

export default Search