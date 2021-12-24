import React from "react"
import CartWidget from "./CartWidget"



const Navbar = () => {
    return (
        <div className="Navbar">
            <h3 className="Titulo">PULCUWINES</h3>
            <nav>
                <li>
                    <a href="/#">Inicio</a>
                </li>
                <li>
                    <a href="/#">Productos</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
                <a href="/#"><CartWidget /></a>
                
            </nav>
        </div>
    )
}

export default Navbar
