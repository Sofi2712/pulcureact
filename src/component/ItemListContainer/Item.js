import React from 'react'
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"

function Item({ nombre, imagen, precio, descripcion, stock }) {

    return (

        <div className="divItem">
            <Card className='cardItem'>
                <Card.Img variant="top" src="#" alt={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
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