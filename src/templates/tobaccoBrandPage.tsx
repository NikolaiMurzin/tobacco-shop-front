import React from 'react'
import { useState, } from 'react'

import MainLayout from "../components/mainLayout/mainLayout"
import Header from "../components/header/header"
import MobileMenu from "../components/mobileMenu/mobileMenu"
import Search from './../components/search/search'
import Overview from './../components/overview/overview'
import ProductLine from './../components/productLine/productLine'

const TobaccosBrandPage= (props) => {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false)
    return (
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
                brandDescription={props.pageContext.brandName}/>

            <ProductLine
                header={"Товары"}
                products={props.pageContext.products}
                addCss={"margin-top: 80px;"}
                />
        </MainLayout>
    )
}
export default TobaccosBrandPage