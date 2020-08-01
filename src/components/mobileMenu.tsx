/** @jsx jsx */

import { jsx, css } from '@emotion/core'

export interface propsTypes {
    isOpen: boolean
    toggleOpen: any
}
const MobileMenu = (props: propsTypes) => {
    const { isOpen, toggleOpen} = props
    const menuStyle = css`
        position: absolute;
        background-color: black;
        z-index: 3;
    `
    const menuBtnStyle = css`
        margin-top: 37px;
        color:white;
        font-size: 18px;
    `
    if (isOpen) {
        return (
            <div css={menuStyle}>
                <div 
                    className="montserrat_regular"
                    css={menuBtnStyle}>Табак</div>
                <div 
                    className="montserrat_regular" 
                    css={menuBtnStyle}>Кальяны</div>
                <div 
                    className="montserrat_regular"
                    css={menuBtnStyle}>Колбы</div>
                <div 
                    className="montserrat_regular"
                    css={menuBtnStyle}>Уголь</div>
                <div 
                    className="montserrat_regular"
                    css={menuBtnStyle}>Акссесуары</div>
                <div 
                    className="montserrat_regular"
                    css={menuBtnStyle}>Аренда</div>
            </div>
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