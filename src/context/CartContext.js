import { useState, useContext } from "react";
import { createContext } from "react";

const CartContext = createContext([])

export function useCartContext () {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (Items) {

        const indice = cartList.findIndex(i => i.id === Items.id)

        if (indice > -1) {

            const cantidadVieja=cartList[indice].cantidad
            let cantidadNueva= cantidadVieja + Items.cantidad
            cartList[indice].cantidad = cantidadNueva
            let arrAux = [...cartList]
            setCartList(arrAux)

        }else{
            setCartList([...cartList, Items])
        }
    }

    const borrarItem = (id) => {

        setCartList(cartList.filter((producto) => producto.id !== id));
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const precioTotal = () => {
        let total = 0
        cartList.forEach((producto) => {
            total += producto.precio * producto.cantidad;
        });

        return total;
    }

    const cantidadItems = () => {
        return cartList.reduce((prev, curr) => prev = prev + curr.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarItem,
            vaciarCarrito,
            precioTotal,
            cantidadItems
        }}>
            {children}
        </CartContext.Provider>
    )
}