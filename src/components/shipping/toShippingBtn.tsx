/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { navigate } from 'gatsby'
import toShippingBtnImg from './toShippingBtnImg.svg'

const ToShippingBtn = () => {
    let currentPage: string 
    if (typeof window != "undefined") {
        currentPage = window.location.pathname
    }
    return (
        <div>
        <button
            onClick={() => {navigate('/shipping', {state: {previusPage: currentPage}})}}
            css={css`
                background: url(${toShippingBtnImg}) no-repeat center;
                background-color: transparent;
                border: none;
                width: 45px;
                height: 45px;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    transform: scale(1.2);
                }
            `}
        >
        </button>
        </div>
    )
}
export default ToShippingBtn