import React from 'react'
import { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MainLayout from "../components/mainLayout/mainLayout"
import Header from "../components/header/header"
import Media from "react-media"
import MobileMenu from "../components/mobileMenu/mobileMenu"
import Search from './../components/search/search'
import Overview from './../components/overview/overview'
import ProductLine from './../components/productLine/productLine'

const TobaccoMainPage = (props) => {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false)
    const [tobaccoBrands, setTobaccoBrands ] = useState<[string]>([''])
    const tobaccoBrandsAttributesQuery = useStaticQuery(graphql`
        query  tobaccoMainPageBrandsQuery {
            allWcProductsAttributes(filter: {name: {eq: "TobaccoBrand"}}) {
            nodes {
                attribute_options {
                    name
                }
                name
            }
            }
      }
    `)

    useEffect(() => {  
        let brands: [string] = ['']
        // extract only brand names from query
        tobaccoBrandsAttributesQuery.allWcProductsAttributes.nodes[0].attribute_options.forEach((attr) => {
            brands.push(attr.name)
        })
        setTobaccoBrands(brands)
    }, [])
    return(
        <MainLayout>
            <Header 
                toggleMobileMenu={toggleMobileMenu}
                mobileMenuOpen = {mobileMenuOpen}
                activeLink = {'табак'}
                />
            <Search/>
            <MobileMenu 
                isOpen={mobileMenuOpen}
                toggleOpen = {toggleMobileMenu}
            />
            <Overview 
                brandsList={tobaccoBrands}
                brandsCategory="tobacco"
                />
            {props.pageContext.tobaccosOfEachBrands.map((tobaccosOfBrand, index)=> {
                return (
                    <ProductLine
                        key={index}
                        header={tobaccosOfBrand.brand}
                        products={tobaccosOfBrand.products}
                        addCss={{marginTop: '80px',}}
                        />
                )
            })}
        </MainLayout>
    )
}

export default TobaccoMainPage