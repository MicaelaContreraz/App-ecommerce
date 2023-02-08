import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import './NavBar.css';


const NavBar= ({contador}) => {



  return (
    <>
    <Navbar bg="light" variant="light" className='shadow-lg'>
        <Container>
          <Navbar.Brand href="#home">TOPSHOP</Navbar.Brand>
          <Nav className="me-auto text-center ">
            <Nav.Link href="#home" className='text-center'>Home</Nav.Link>
            <Nav.Link href="#Remeras" className='text-center'>Remeras</Nav.Link>
            <Nav.Link href="#Pantalones" className='text-center'>Pantalones</Nav.Link>
            <Nav.Link href="#Pantalones" className='text-center'>zapatos</Nav.Link>
            <Nav.Link href="#Pantalones" className='text-center'>shorts/polleras</Nav.Link>
          </Nav>
            <Nav.Link  className='text-end'> <CartWidget/> </Nav.Link>
            <p className='number'>0</p>
        </Container>
      </Navbar>
    

    </>
  )
}

export default NavBar

