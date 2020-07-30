/** @jsx jsx */
import Layout from '../components/mainLayout'
import { graphql } from "gatsby"
import { css, jsx } from '@emotion/core'
import Image from '../components/tobaccoImage'

const ProductPage = (props) => {
    let {data} = props
    let product= data.wcProducts
    return (
    <Layout>
        <Image src={product.images[0].src}/>
        <div css={css`color: white`}>Page of product with data {[product.name, product.id, product.price]}</div>
        
        <div dangerouslySetInnerHTML={{__html: product.short_description}}></div>
    </Layout>
    )
}
export const query = graphql`
    query product($id : String) {
        wcProducts(id: {eq: $id}) {
            name
            id
            price
            weight
            images {
                src
                alt
            }
            product_variations {
                price
                id
                weight
                attributes {
                    name
                    option
                }
            }
            short_description
        }
    }
    ` 
export default ProductPage