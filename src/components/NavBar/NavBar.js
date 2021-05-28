import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
const Navigation = () => {
    return (
        <>
        {/*Need to ask on slack if I can use this*/}
        {/*Need to add custom flexbox css and change the fonts*/}

        <Navbar collapseOnSelect fixed="top" expand="sm" bg="info" variant="dark" >
            <Container>
            <Navbar.Brand href="#home">NFT Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-au1to">
                        <Nav.Link href="#library">Library</Nav.Link>
                        <Nav.Link href="#common">Common</Nav.Link>
                        <Nav.Link href="#rare">Rare</Nav.Link>
                        <Nav.Link href="#epic">Epic</Nav.Link>
                        <Nav.Link href="#legendary">Legendary</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation
