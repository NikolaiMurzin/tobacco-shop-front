import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { navigate } from 'gatsby'
import './productCard.sass'
import './addProductBtn.sass'

export interface propTypes {
    id: string,
    imageSrc: string,
    brand: string,
    name: string,
    price: string,
    weights: string[],
    pathName: string,
    wordpress_id: string,
}
const ProductCard = (props: propTypes) => {
    const { imageSrc, brand, name, price, weights, pathName } = props
    return (
        <div 
            className="productCard"
        >
                                <div 
                                    onClick={() => {navigate(pathName)}}
                                >
                                    <div className="productCard__imageWrap">
                                        <LazyLoadImage
                                            className="productCard__image"
                                            src={imageSrc} 
                                            effect='opacity'
                                            wrapperProps={{
                                                style: {
                                                    display: 'flex',
                                                    alignItems: "center",
                                                }
                                            }}
                                        />
                                    </div>
                                    <div
                                        className='productCard__brand montserrat_regular'
                                    >
                                        {brand}
                                    </div>
                                    <div 
                                        className='productCard__name montserrat_regular'
                                    >{name}</div>
                                    <div
                                        className="productCard__price montserrat_bold" 
                                    >{price} руб.</div>
                                    <div 
                                    >
                                        {weights? weights.map((weight, index) => {
                                            return <div
                                                    key={index}
                                                    className="productCard__weight montserrat_regular" 
                                        >{weight} гр.</div>
                                    }) : <div></div>}
                                    </div>
                                </div>
                                <div
                                    className="addProductBtn"
                                    onClick={() => {console.log('add product clicked')}}
                                >+</div>
        </div>
    )
}

export default ProductCard