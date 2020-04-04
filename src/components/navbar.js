import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo1 from './image/soi.png'
import '../App.scss'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Brand href="#home">
                    <img
                        src={Logo1}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">LSPD</Nav.Link>
                    <Nav.Link href="#deets">EMS</Nav.Link>
                    <Nav.Link href="#deets">Discord SOI</Nav.Link>
                    <Nav.Link href="#deets">TeamSpeak SOI</Nav.Link>
                    </Nav>
                    {/* <NavDropdown className="dropdown"  title="Dashboard">
                        <NavDropdown.Item href="#">LSPD</NavDropdown.Item>
                        <NavDropdown.Item href="#">EMS</NavDropdown.Item>
                    </NavDropdown> */}
                    <Button variant="dark">LOGIN STEAM</Button>{' '}
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header;