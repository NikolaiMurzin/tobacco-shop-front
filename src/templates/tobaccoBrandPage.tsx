/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MainLayout from "../components/mainLayout"
import Header from "../components/header/header"
import Media from "react-media"
import MobileMenu from "./../components/mobileMenu"
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
            <div>
                <Media 
                    query="(max-width: 700px)"
                    render={() => (
                        <MobileMenu 
                            isOpen={mobileMenuOpen}
                            toggleOpen = {toggleMobileMenu}
                        />
                    )}
                    />
            </div>

            <Overview
                brandDescription={props.pageContext.brandName}/>

            <ProductLine
                header={"Товары"}
                products={props.pageContext.tobaccos}
                addCss={"margin-top: 80px;"}
                />

        </MainLayout>
    )
}
export default TobaccosBrandPage