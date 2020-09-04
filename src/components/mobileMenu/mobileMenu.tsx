import React from 'react'
import Media from "react-media"
import './mobileMenu.sass'

export interface propsTypes {
    isOpen: boolean
    toggleOpen: any
}
const MobileMenu = (props: propsTypes) => {
    const { isOpen, toggleOpen} = props
    if (isOpen) {
        return (
            <Media
                query="(max-width: 700px)" 
                render={() => (
                    <div className="mobileMenu">
                        <div 
                            className="mobileMenu__link montserrat_regular"
                            >Табак</div>
                        <div 
                            className="mobileMenu__link ontserrat_regular" 
                            >Кальяны</div>
                        <div 
                            className="mobileMenu__link ontserrat_regular"
                            >Колбы</div>
                        <div 
                            className="mobileMenu__link ontserrat_regular"
                            >Уголь</div>
                        <div 
                            className="mobileMenu__link montserrat_regular"
                            >Акссесуары</div>
                        <div 
                            className="mobileMenu__link montserrat_regular"
                            >Аренда</div>
                    </div>
            )}/>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
    
}
// query for distinct TobaccoBrands
// query MyQuery {
//  allWcProductsAttributes(filter: {name: {eq: "TobaccoBrand"}}) {
//    distinct(field: attribute_options___name)
//  }
// }
export default MobileMenu