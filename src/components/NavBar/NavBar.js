import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css'

const Navigation = () => {
    return (
        <>
        {/*Need to add custom flexbox css and change the fonts*/}
        <Navbar className="custom__navbar" collapseOnSelect fixed="top" expand="sm" bg="info" variant="dark" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Brand className="custom__navfont--navbrand" href="/">NFT Shop</Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-au1to">
                        <Nav.Link className="custom__hover custom__navfont" href="#library">Library</Nav.Link>
                        <Nav.Link className="custom__hover custom__navfont" href="#common">Common</Nav.Link>
                        <Nav.Link className="custom__hover custom__navfont" href="#rare">Rare</Nav.Link>
                        <Nav.Link className="custom__hover custom__navfont" href="#epic">Epic</Nav.Link>
                        <Nav.Link className="custom__hover custom__navfont" href="#legendary">Legendary</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                <CartWidget />
            </Container>

        </Navbar>
        </>
    )
}

export default Navigation
