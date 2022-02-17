import './Item.css';
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import { Link } from 'react-router-dom'

function Item({ id, nombre, imagen, precio, stock }) {

    return (

        <div className="divItem">
            <Card className='cardItem'>
                <Card.Img variant="top" src={imagen} alt={nombre} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text className='pCardPrecio'>${precio}</Card.Text>
                    <div className='divButtonCardItem'>
                        <Link to={`/item/${id}`}><Button variant="light" className='buttonCardItem'>Mas información</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
