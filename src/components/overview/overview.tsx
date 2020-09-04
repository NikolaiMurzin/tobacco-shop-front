import React from 'react'
import { Link } from 'gatsby'
import getPathNameOfBrand from './../../../helpers/getPathNameOfBrand'
import Media from "react-media"
import './overview.sass'

export interface propsTypes {
    brandsList?: [string],
    brandsCategory?: string,
    brandDescription?: string,
}

const Overview = (props: propsTypes) => {
    return  (
       <div className="overview">

           <div className="overview__imageWrap">
                <img 
                    className="overview__image"
                    src="https://kizilov-group-test.ru/wp-content/uploads/2020/07/8-1-1.jpg"
                >
                </img>
           </div>

           <Media 
            query="(min-width: 700px)"
            render={() => {
                    if (props.brandsList) {
                        return (
                            <div
                                className="overview__brandsList"
                            >
                                {props.brandsList.map((brand, index) => {
                                    const pathName = getPathNameOfBrand(props.brandsCategory, brand)
                                    return (
                                        <Link
                                            className="overview__brandLink montserrat_regular"
                                            key={index}
                                            to={pathName}
                                        >{brand}</Link>
                                    )
                                })}
                            </div>
                        )
                    } else if (props.brandDescription) {
                        return (
                            <div className="overview__descriptionWrap">
                                <div
                                    className="overview__descriptionHeader montserrat_regular"
                            >{props.brandDescription}</div>
                                <div
                                    className="overview__descriptionText montserrat_regular"
                                >
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="overview__descriptionWrap">
                                <div
                                    className="overview__descriptionHeader montserrat_regular"
                                >Оплата и доставка</div>
                                <div
                                    className="overview__descriptionText montserrat_regular"
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