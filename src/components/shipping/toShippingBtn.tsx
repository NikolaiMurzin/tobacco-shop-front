import React from 'react'
import { navigate } from 'gatsby'
import './toShippingBtn.sass'

const ToShippingBtn = () => {
    let currentPage: string 
    if (typeof window != "undefined") {
        currentPage = window.location.pathname
    }
    return (
        <div>
        <button
            className="toShippingBtn"
            onClick={() => {navigate('/shipping', {state: {previusPage: currentPage}})}}
        >
        </button>
        </div>
    )
}
export default ToShippingBtn