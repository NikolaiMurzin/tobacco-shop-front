/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollContainer from 'react-indiana-drag-scroll'
import ProductCard from '../productCard/productCard'


export interface propTypes {
    header: string
    addCss?: any
    products: [product]
}
export interface product{
    id: string
    name: string
    price: string
    attributes: [productAttribute]
    categories: [productCattegorie]
    images: [productImage]
}
export interface productAttribute{
    name: string
    options: []
}
export interface productCattegorie {
    name: string
}
export interface productImage {
    src: string
    localFile: any
}

const productLine = (props: propTypes) => {
    return(
        <div css={css`
            ${props.addCss};
            border-bottom: solid white 2px;
        `}>
            <div 
                css={css`
                    font-size: 24px;
                    color: white;
                    margin-bottom: 26px;
                    margin-left: 29px;
                `}
                className="montserrat_regular"
                >{props.header}</div>
            <ScrollContainer
                horizontal={true}
                nativeMobileScroll={true}
                style={{
                    display: 'flex',
                    marginLeft: '29px',
                }}
            >
                    {props.products.map((product, index) => {
                        let imageSrc 
                        if (product.node.images[0]) {
                            console.log(product)
                            imageSrc = product.node.images[0].localFile.childImageSharp.resize.src
                        }
                        let weights: [string] = ['']
                        let weightAttributes = product.node.attributes.filter((attr) => {
                                return attr.name === 'weight'
                                })
                        if (weightAttributes.length != 0) {
                            weights = weightAttributes[0].options
                        }

                        let brandName
                        let  brandAttribute = product.node.attributes.filter(attr => attr.name.includes('Brand'))
                        if (brandAttribute.length != 0) {
                            brandName = brandAttribute[0].options[0].toLowerCase()
                        }
                        let name = product.node.name
                        let price = product.node.price
                        return (
                            <div 
                                key={index}
                                css={css`
                                    margin-right: 17px;
                                `}
                            >
                                <ProductCard 
                                    imageSrc = {imageSrc}
                                    brand = {brandName}
                                    name = {name}
                                    price = {price}
                                    weights = {weights}
                                />
                            </div>
                        )
                    })}
            </ScrollContainer>
        </div>
    ) 
}

export default productLine