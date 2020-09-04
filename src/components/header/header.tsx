import React from 'react'
import { Link } from 'gatsby'
import ToShippingBtn from './../shipping/toShippingBtn'
import './header.sass'


export interface propsTypes {
    toggleMobileMenu: any
    mobileMenuOpen: boolean
    activeLink?: string
}
const Header = (props: propsTypes) => {
    const { toggleMobileMenu, mobileMenuOpen } = props

    return (
        <div 
            className="header"
            >
            <div className="header__openMenuBtnWrap">
                <button 
                    onClick={() => { toggleMobileMenu(!mobileMenuOpen)}}
                    className="header__openMenuBtn"
                    >
                </button>
            </div>
            <Link
                className="header__toHome montserrat_regular"
                to="/"
                >Kupil & Pokuril</Link>
                <div 
                    className="header__navWrap montserrat_regular"
                    >
                    <Link 
                        className="header__navLink"
                        to="/tobacco" 
                        >Табак</Link>
                    <Link 
                        className="header__navLink"
                        to="/hookah" 
                        >Кальяны</Link>
                    <Link
                        className="header__navLink" 
                        to="/flasks">Колбы</Link>
                    <Link
                        className="header__navLink" 
                        to="/coal">Уголь</Link>
                    <Link 
                        className="header__navLink"
                        to="/accessories" 
                        >Акссесуары</Link>
                    <Link
                        className="header__navLink" 
                        to="/rent">Аренда</Link>
                </div>
            <ToShippingBtn/>
        </div>
    )
}
export default Header