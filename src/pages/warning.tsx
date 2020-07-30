/** @jsx jsx */
import MainLayout from '../components/mainLayout'
import '../css/fonts/fonts.css'
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
  
const Warning = () => {

    let headerStyle =  css`
        font-size: 24px;
        color: white;
        text-align: center;
        margin: 0 auto;
        @media (min-width: 700px) {
            padding-top: 30vh;
            margin-bottom: 5.37vh;
        }
        @media (max-width: 700px) {
            padding-top: 7vh;
            margin-bottom: 9.78vh;
        }
    `
    let textStyle = css`
        font-size: 16px;
        color: white;
        max-width: 1041px;
        margin: 0 auto 5.43vh auto;
        padding-right: 25px;
        padding-left: 20px;
        text-align: center;
        line-height: 30px;
    `
    let buttonStyle = css`
        width: 175px;
        border-radius: 7px;
        padding: 12px;
        font-size: 14px;
        color: white;
        border: 3px solid #D3042B;
        max-height: 81px;
        cursor: pointer;
    `
    let buttonWrapStyle = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    return (
        <MainLayout>
            <div 
                className="montserrat_regular"
                css={headerStyle}    
            >Подтвердите, что вам больше 18 лет</div>
            <div 
                className="montserrat_regular"
                css={textStyle}
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
            <div css={buttonWrapStyle}> 
                <Link
                    to="/"
                    className="montserrat_regular"
                    css={css`
                        ${buttonStyle};
                        background-color: #D3042B;
                        margin-right: 19px;
                        text-decoration: none;
                        text-align: center;
                        &:hover {
                            border: 3px solid white
                        }
                    `}
                >да, мне больше 18</Link>
                <a
                    href="http://www.google.com"
                    className="montserrat_regular"
                    css={css`
                        ${buttonStyle};
                        background-color: Transparent;
                        text-decoration: none;
                        text-align: center;
                        &:hover {
                            border: 3px solid white
                        }
                    `}
                    
                >нет, мне меньше 18</a>
            </div>
        </MainLayout>
    )
}

export default Warning