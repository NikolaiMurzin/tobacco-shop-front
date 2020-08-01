/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import  { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import MainLayout from "../components/mainLayout"
import Header from "../components/header/header"
import Media from "react-media"
import MobileMenu from "./../components/mobileMenu"
import Search from './../components/search/search'
import Overview from './../components/overview/overview'
import ProductLine from './../components/productLine/productLine'

const IndexPage = () => {
  const [mobileMenuOpen, toggleMobileMenu] = useState(false)
  const productsQuery = useStaticQuery(graphql`
      query MyQuery {
        allWcProducts(filter: {}) {
          nodes {
              id
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
  `)

  let nodes = productsQuery.allWcProducts.nodes
  let tobaccos = nodes.filter((node) => node.categories[0].name === "tobacco")
  tobaccos = tobaccos.slice(1, 19)
  return(
    <MainLayout>
      <Header 
        toggleMobileMenu={toggleMobileMenu}
        mobileMenuOpen = {mobileMenuOpen}
        ></Header>
      <Search></Search>
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
      <Overview/>
      <ProductLine header="Табак" products={tobaccos}
        addCss={"margin-top: 80px;"}
      />
      <ProductLine header="Кальяны" products={tobaccos} 
        addCss={"margin-top: 80px;"}
      ></ProductLine>
      <ProductLine header="Колбы" products={tobaccos} 
        addCss={"margin-top: 80px;"}
      ></ProductLine>
      <ProductLine header="Уголь" products={tobaccos} 
        addCss={"margin-top: 80px;"}
      ></ProductLine>
      <ProductLine header="Акссесуары" products={tobaccos} 
        addCss={"margin-top: 80px;"}
      ></ProductLine>
    </MainLayout>
  )
}

export default IndexPage
