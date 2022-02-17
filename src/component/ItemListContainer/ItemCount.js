import {useState} from 'react'
import { Button } from 'react-bootstrap'
import './ItemCount.css'

function ItemCount({ stock, onAdd }) {

    const initial = 1

    const [counter, setCounter] = useState(1)

    const handleDecrement = () => {

        counter > initial ? setCounter(prev => prev - 1) : console.log('1 es el mínimo de compra')

    }

    const handleIncrement = () => {
       
        counter < stock ? setCounter(prev => prev + 1) : console.log('Llegó al máximo de productos')
       
    }

    return (
        <div className='divItemCount'>
            <div className='itemCount'>
                <button onClick={handleDecrement} className='buttonItemCount'><strong>-</strong></button>
                <h3 className='h3Counter'>{counter}</h3>
                <button onClick={handleIncrement} className='buttonItemCount'><strong>+</strong></button>
            </div> 
            <div>
                <Button onClick={() => onAdd(counter)}  variant="light">Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount