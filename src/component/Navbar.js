import './NavBar.css'
import React from "react"
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import {useCartContext} from '../context/CartContext'


function NavBar() {

    const { cantidadItems } = useCartContext()

    return (
        <div>
            <Navbar bg="white" variant="white">
                <a href="#inicio"><img src={logo} alt="logo" className="logo" /></a>
                <Container>
                    <Nav>
                        <ul>
                            <li>
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/categoria/Blancos'>Vino blanco</Link>
                            </li>
                            <li>
                                <Link to='/categoria/Espumantes'>Espumantes</Link>
                            </li>
                            <li>
                            </li>
                            <Link to={`/cart`} className='cartNavBar'>
                            <CartWidget />
                                {cantidadItems() > 0 ? <div className='globoItems'> {cantidadItems()} </div> : <div></div>}
                            </Link>
                        </ul>
                    
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar
