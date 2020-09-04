import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import ProductCard from '../productCard/productCard'
import './productLine.sass'

export interface propTypes {
    header: string
    addCss?: any
    products: product[]
}
export interface product{
    id: string
    name: string 
    imageSrc: string
    brand: string
    price: string
    weights: string[]
    pathName: string
    wordpress_id: string
}

const productLine = (props: propTypes) => {
    return(
        <div
            className="productLine"
            style={props.addCss} 
        >
            <div 
                className="productLine__header montserrat_regular"
                >{props.header}</div>
            <ScrollContainer
                className="productLine__scrollContainer"
                horizontal={true}
                nativeMobileScroll={true}
            >
                    {props.products.map((product, index) => {
                        return (
                            <div 
                                className="productLine__productCardWrap"
                                key={index}
                            >
                                <ProductCard 
                                    id = {product.id}
                                    name = {product.name}
                                    imageSrc = {product.imageSrc}
                                    brand = {product.brand}
                                    price = {product.price}
                                    weights = {product.weights}
                                    pathName = {product.pathName}
                                    wordpress_id = {product.wordpress_id}
                                />
                            </div>
                        )
                    })}
            </ScrollContainer>
        </div>
    ) 
}

export default productLine