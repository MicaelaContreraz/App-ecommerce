import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function CartWidget({contador}) {
  return (
    <div>
        <i className="bi bi-cart3"></i>
        <p> {contador} </p>
    </div>
  )
}

export default CartWidget