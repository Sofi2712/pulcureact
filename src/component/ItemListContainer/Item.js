import React from 'react'
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"
import './Item.css';

function Item({ nombre, imagen, precio, descripcion, stock }) {

    return (

        <div className="item">
            <Card className='cardItem'>
                <Card.Img variant="top" src={imagen} alt={nombre} className='imagenes' />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        <p>{descripcion}</p>
                        <p>${precio}</p>
                    </Card.Text>
                    <ItemCount stock={stock}/>
                    <div className='divButtonCardItem'>
                        <Button variant="dark" className='buttonCardItem'>Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item