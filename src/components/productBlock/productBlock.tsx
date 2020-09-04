import React from 'react'
import './productBlock.sass'
import ProductCard from '../productCard/productCard'

interface propTypes {
    products: product[]
}
interface product {
    id: string,
    imageSrc: string,
    brand: string,
    name: string,
    price: string,
    weights: string[],
    pathName: string,
    wordpress_id: string,
}

const ProductBlock = (props: propTypes) => {
    return <div>
        {props.products.map((product) => {
            return <ProductCard
                        id = {product.id}
                        imageSrc = {product.imageSrc}
                        brand = {product.brand}
                        name = {product.name}
                        price = {product.price}
                        weights = {product.weights}
                        pathName = {product.pathName}
                        wordpress_id = {product.wordpress_id}
                    />
        })}
    </div>
}

export default ProductBlock