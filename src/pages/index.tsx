import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import MainLayout from "../components/mainLayout/mainLayout"
import Header from "../components/header/header"
import MobileMenu from "../components/mobileMenu/mobileMenu"
import Search from '../components/search/search'
import Overview from '../components/overview/overview'
import ProductLine from '../components/productLine/productLine'
import processQueryForProductLine from '../services/processQueryForProductLine'

interface queryTypes{
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
interface propsTypes {
    productsQuery: queryTypes
}
interface stateTypes {
    tobaccos: product[]
    mobileMenuOpen: boolean
}
interface product{
    id: string
    name: string 
    imageSrc: string
    brand: string
    price: string
    weights: string[]
    pathName: string
    wordpress_id: string
    category: string
}

class IndexPageTemplate extends React.Component<propsTypes, stateTypes> {

    constructor(props) {

        super(props)


        // create array of products from nodes
        const products: product[] = processQueryForProductLine(props.productsQuery)
        let tobaccos : product[] = products.filter((product: product) => product.category === "tobacco")
        tobaccos = tobaccos.slice(1, 19)

        this.state = {
            tobaccos,
            mobileMenuOpen: false
        }

        // bind all functions to this class
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this)

    }

    toggleMobileMenu() {
        this.setState((prevState) => {
            return ({
                ...prevState,
                mobileMenuOpen: !prevState.mobileMenuOpen
            })
        })
    }

    render() {
        return (
            <MainLayout>
                <Header 
                    toggleMobileMenu={this.toggleMobileMenu}
                    mobileMenuOpen = {this.state.mobileMenuOpen}
                    ></Header>
                <Search></Search>
                <MobileMenu
                    isOpen={this.state.mobileMenuOpen}
                    toggleOpen = {this.toggleMobileMenu}
                />
                <Overview/>
                <ProductLine header="Табак" products={this.state.tobaccos}
                    addCss={{marginTop: '80px',}}
                />
                <ProductLine header="Кальяны" products={this.state.tobaccos} 
                    addCss={{marginTop: '80px',}}
                ></ProductLine>
                <ProductLine header="Колбы" products={this.state.tobaccos} 
                    addCss={{marginTop: '80px',}}
                ></ProductLine>
                <ProductLine header="Уголь" products={this.state.tobaccos} 
                    addCss={{marginTop: '80px'}}
                ></ProductLine>
                <ProductLine header="Акссесуары" products={this.state.tobaccos} 
                    addCss={{marginTop: '80px'}}
                ></ProductLine>
            </MainLayout>
        )
    }
}

export default () => (
    <StaticQuery
        query = {graphql`
            query MyQueryyyyy {
                allWcProducts(filter: {}) {
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
        `} 
        render={(data: queryTypes) => (
            <IndexPageTemplate productsQuery={data}></IndexPageTemplate>
        )}
    />
)

