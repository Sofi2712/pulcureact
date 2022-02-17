import {useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemListContainer/ItemCount'
import './ItemDetail.css';
import { useCartContext } from '../../../context/CartContext';

function ItemDetail({ producto }) { 

    const { addToCart } = useCartContext()
    
    const [show, setShow] = useState(true)

    const onAdd = (contador) => {

        setShow(false)
        addToCart({...producto, cantidad: contador})
    }

    return (
        <div className='divItemDetail'>
            <img src={producto.img} alt={producto.nombre} className='imgItemDetail'/>
            <div>
                <h4>{producto.nombre}</h4>
                <p>{producto.descripcion}</p>
                <h4>Precio: ${producto.precio}</h4>
                { show ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
                <div className='buttonsDetail'>
                    <Link to='/'><Button variant="outline-light" className='buttonSeguirCompra'>Seguir comprando</Button></Link>
                    <Link to='/cart'><Button variant="light" className='buttonTerminarCompra'>Terminar compra</Button></Link>
                </div>}
            </div>
        </div>
    )
}

export default ItemDetail
