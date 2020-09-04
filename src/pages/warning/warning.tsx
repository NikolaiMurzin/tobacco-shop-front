import React from 'react'
import MainLayout from '../../components/mainLayout/mainLayout'
import { Link } from 'gatsby'
import './warning.sass'
  
const Warning = () => {

    return (
        <MainLayout>
            <div className="warning__header montserrat_regular"
            >Подтвердите, что вам больше 18 лет</div>
            <div 
                className="warhing__text montserrat_regular"
                >Информация на данном сайте не является рекламой, 
                 предназначена для ограниченного круга лиц, а именно для
                 совершеннолетних потребителей табачной продукции, 
                 для предоставления им достоверной информации об основных 
                 потребительских свойствах и качественных характеристик
                 табачной продукции и аксессуарах для курения 
                 (ст.10 Закона «О защите прав Потребителя»). 
                 Лицам, не достигшим совершеннолетия, пользование Сайтом запрещено 
                 (ст. 20 ФЗ №15 «Об охране здоровья граждан»). 
                 Сайт использует Cookie</div>
            <div className="warning__buttonsWrap"> 
                <Link className="warning__button 
                                 warning__button_bgColor_red
                                 warning__button_marginR_19
                                 montserrat_regular
                                "
                    to="/"
                >да, мне больше 18</Link>
                <a
                    className="warning__button
                               warning__button_bgColor_transparent
                               montserrat_regular
                               "
                    href="http://www.google.com"
                >нет, мне меньше 18</a>
            </div>
        </MainLayout>
    )
}

export default Warning