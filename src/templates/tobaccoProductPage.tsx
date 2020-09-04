/** @jsx jsx */
import MainLayout from '../components/mainLayout/mainLayout'
import { graphql } from "gatsby"

const ProductPage = (props) => {
    let {data} = props
    let product= data.wcProducts
    return (
    <MainLayout>
        <div style={{color: 'white'}}>Page of product with data {[product.name, product.id, product.price]}</div>
        
        <div dangerouslySetInnerHTML={{__html: product.short_description}}></div>
    </MainLayout>
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