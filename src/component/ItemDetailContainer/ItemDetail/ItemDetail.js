import React from 'react'
import ItemCount from '../../ItemListContainer/ItemCount'
import './ItemDetail.css';

function ItemDetail({ producto }) {

    return (
        <div className='divDetail'>
            <img src={producto.img} alt={producto.nombre} className='imgDetail'/>
            <div>
                <h2>{producto.nombre}</h2>
                <p className='pDescripcionDetail'>{producto.descripcion}</p>
                <h4 className='precioDetail'>Precio: ${producto.precio}</h4>
                <ItemCount />
                <div className='divButtonAgregarAlCarritoDetail'>
                    <button className='buttonAgregarAlCarritoDetail'>Agregar al carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail