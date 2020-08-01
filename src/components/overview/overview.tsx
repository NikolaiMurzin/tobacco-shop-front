/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import Media from "react-media"
import './overview.css'

export interface propsTypes {
    brandsList?: [string],
    brandsCategory?: string,
    brandDescription?: string,
}

const Overview = (props: propsTypes) => {
    return  (
       <div className="overview">
           <div className="overview_imageWrap"
            >
                <img 
                    className="overview_image"
                    src="https://kizilov-group-test.ru/wp-content/uploads/2020/07/8-1-1.jpg"
                        ></img>
           </div>
           <Media 
            query="(min-width: 700px)"
            render={() => {
                    if (props.brandsList) {
                        return (
                            <div
                                css={css`
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    overflow-y: auto;
                                    margin-left: 25px;
                                `}
                            >
                                {props.brandsList.map((brand) => {
                                    const getPathNameOfBrand = require('./../../../helpers/getPathNameOfBrand')
                                    const pathName = getPathNameOfBrand(props.brandsCategory, brand)
                                    return (
                                        <Link
                                            to={pathName}
                                            className="montserrat_regular"
                                            css={css`
                                                font-size: 24px;
                                                color: #7F93B1;
                                                cursor: pointer;
                                                margin-bottom: 12px;
                                                text-decoration: none;
                                                &:hover{
                                                    color: white;
                                                }
                                            `}
                                        >{brand}</Link>
                                    )
                                })}
                            </div>
                        )
                    } else if (props.brandDescription) {
                        return (
                            <div className="overview_descriptionWrap">
                                <div
                                    className="overview_descriptionHeader montserrat_regular"
                            >{props.brandDescription}</div>
                                <div
                                    className="overview_descriptionText montserrat_regular"
                                >
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="overview_descriptionWrap">
                                <div
                                    className="overview_descriptionHeader montserrat_regular"
                                >Оплата и доставка</div>
                                <div
                                    className="overview_descriptionText montserrat_regular"
                                >
                                    Эта книга адресована всем, кто изучает русский язык. 
                                    Но состоит она не из правил, упражнений и учебных
                                    текстов. Для этого созданы другие замечательные
                                    учебники.

                                    У этой книги совсем иная задача. Она поможет вам
                                    научиться не только разговаривать, но и размышлять
                                    по-русски.

                                </div>
                            </div>
                        )
                    }
                }
            }
            />
       </div>
   )
}

export default Overview