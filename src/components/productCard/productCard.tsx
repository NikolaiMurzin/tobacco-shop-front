/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export interface propTypes {
    imageSrc: string,
    brand: string,
    name: string,
    price: string,
    weights: [string],
}
const ProductCard = (props: propTypes) => {
    const { imageSrc, brand, name, price, weights } = props
    return (
        <div>
                                <div css={css`
                                    display: flex;
                                    justify-content: left;
                                    height: 108px;
                                    width: 107px;
                                    margin-bottom: 5px;
                                `}>
                                    <LazyLoadImage
                                        src={imageSrc} 
                                        effect='opacity'
                                        css={css`
                                            max-height: 108px;
                                            max-width: 107px;
                                            width: auto;
                                            height: auto;
                                        `}
                                        wrapperProps={{
                                            style: {
                                                display: 'flex',
                                                alignItems: "center",
                                            }
                                        }}
                                    />
                                </div>
                                <div
                                    className='montserrat_regular'
                                    css={css`
                                        font-size: 14px;
                                        margin-bottom: 2px;
                                        color: white;
                                        max-height: 16px;
                                        overflow-y: hidden;
                                    `}
                                >
                                    {brand}
                                </div>
                                <div 
                                    className='montserrat_regular'
                                    css={css`
                                        font-size: 14px;
                                        margin-bottom: 2px;
                                        color: white;
                                        max-height: 16px;
                                        overflow-y: hidden;
                                    `}
                                >{name}</div>

                                <div
                                    className="montserrat_bold" 
                                    css={css`
                                        font-size: 14px;
                                        margin-bottom: 2px;
                                        color: white;
                                        max-height: 16px;
                                        overflow-y: hidden;
                                    `}
                                >{price} руб.</div>

                                <div 
                                    css={css`
                                        
                                    `}
                                >{weights.map((weight, index) => {
                                    return <div
                                            key={index}
                                            className="montserrat_regular" 
                                            css={css`
                                                font-size: 12px;
                                                color: white;
                                                max-height: 16px;
                                                overflow-y: hidden;
                                            `}
                                    >{weight} гр.</div>
                                })}
                                </div>

                                <div
                                    css={css`
                                        width: 106px;
                                        height: 26px;
                                        background-color: red;
                                        border-radius: 8px;
                                        margin-top: 3px;
                                        text-align: center;
                                        line-height: 25px;
                                        font-size: 20px;
                                        margin-bottom: 25px;
                                        cursor: pointer;
                                        &:hover {
                                            background-color: white;
                                        }
                                    `}
                                >+</div>
        </div>
    )
}

export default ProductCard