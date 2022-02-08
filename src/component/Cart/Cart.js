import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
import '../Cart/cart.css'

function Cart() {

    const { cartList, borrarItem, vaciarCarrito, precioTotal } = useCartContext()

    return (
        <>
            {cartList.length === 0 ? (
                <div className="carritoVacio">
                    <h2>Su carrito se encuentra vacío</h2>
                    <Link to="/">
                        <Button variant="dark">Ir a la tienda</Button>
                    </Link>
                </div>
            ) : (
                <div className="cart">
                    {cartList.map((prod) => 
                        <div key={prod.id}>
                            <div className="filaCart">
                                <img src={prod.img} alt={prod.nombre} /> 
                                <h3>{prod.nombre} </h3>
                                <h3>Cantidad: {prod.cantidad} </h3>
                                <h3>${prod.precio} </h3>
                                <Button variant="dark" onClick={() => borrarItem(prod.id)}>ELIMINAR</Button>
                            </div>
                        </div>
                    )} 
                    <div className="finalCart">
                        <p className="precioTotal">Precio total ${precioTotal()} </p>
                        <Link to={'/cart/checkOut'}>
                            <Button variant="dark" className='vaciarCarrito'>Comprar</Button>
                        </Link>
                        <Button variant="outline-dark" className='vaciarCarrito' onClick={vaciarCarrito}>Vaciar carrito</Button>
                    </div>                      
                </div>
            )}
        </>
    );
};


export default Cart