import './NavBar.css'
import React from "react"
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';


function NavBar() {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <a href="#inicio"><img src={logo} alt="logo" className="logo" /></a>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#galeria">Tienda</Nav.Link>
                        <Nav.Link href="#tienda">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar
