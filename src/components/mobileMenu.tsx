/** @jsx jsx */

import { jsx, css } from '@emotion/core'

export interface propsTypes {
    isOpen: boolean
    toggleOpen: any
}
const MobileMenu = (props: propsTypes) => {
    const { isOpen, toggleOpen} = props
    return (
        <div>
            
        </div>
    )
}
// query for distinct TobaccoBrands
// query MyQuery {
//  allWcProductsAttributes(filter: {name: {eq: "TobaccoBrand"}}) {
//    distinct(field: attribute_options___name)
//  }
// }
export default MobileMenu