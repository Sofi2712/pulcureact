import React from 'react'
import { useCartContext } from "../../context/CartContext"

function Cart() {

    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <li key={prod.id}>{prod.nombre} {prod.cantidad} ${prod.precio}</li>)}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
