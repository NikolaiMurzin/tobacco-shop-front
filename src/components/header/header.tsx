/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Media from "react-media"
import { Link, withPrefix } from 'gatsby'
import openMenuBtn from './openMenuBtn.svg'
import ToShippingBtn from './../shipping/toShippingBtn'


export interface propsTypes {
    toggleMobileMenu: any
    mobileMenuOpen: boolean
    activeLink?: string
}
const Header = (props: propsTypes) => {
    const { toggleMobileMenu, mobileMenuOpen } = props
    const pcMenuLinksStyle = css`
        font-size: 24px;
        color: white;
        text-decoration: none;
        margin: auto 15px;
        transition: 0.2s;
        @media(max-width: 950px) {
            width: 33%;
        }
        &:hover{
            transform: scale(1.2)
        };
    `

    return (
        <div 
            css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                @media (min-width: 700px) {
                    padding-top: 88px;
                }
                @media (max-width: 700px) {
                    padding-top: 51px;
                }
            `}
            >
            <Media 
                query="(max-width: 699px)"
                render={() => (
                    <div>
                        <button 
                            onClick={() => { toggleMobileMenu(!mobileMenuOpen)}}
                            css={css`
                                background: url(${openMenuBtn}) no-repeat center;
                                background-color: transparent;
                                border: none;
                                height: 45px;
                                width: 45px;
                                cursor: pointer;
                            `}
                            >
                        </button>
                    </div>
                )}
                />
            <Link
                to="/"
                className="montserrat_regular"
                css={css`
                    display: flex;
                    align-items: center;
                    text-align: center;
                    font-size: 24px;
                    color: white;
                    cursor: pointer;
                    text-decoration: none;
                `}
                >Kupil & Pokuril</Link>
            <Media 
                query="(min-width: 700px)"
                render={() => (
                    <div className="montserrat_regular"
                        css={css`
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        @media(max-width: 950px) {
                            flex-wrap: wrap;
                        }
                        `}
                        >
                        <Link to="/tobacco" 
                            css={css`
                                ${pcMenuLinksStyle}
                                `}
                            >Табак</Link>
                        <Link to="/hookah" css={pcMenuLinksStyle}>Кальяны</Link>
                        <Link to="/flasks" css={pcMenuLinksStyle}>Колбы</Link>
                        <Link to="/coal" css={pcMenuLinksStyle}>Уголь</Link>
                        <Link to="/accessories" css={pcMenuLinksStyle}>Акссесуары</Link>
                        <Link to="/rent" css={pcMenuLinksStyle}>Аренда</Link>
                    </div>
                )}
                />
            <ToShippingBtn/>
        </div>
    )
}
export default Header