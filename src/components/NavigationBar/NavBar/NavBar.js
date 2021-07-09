import React, {useContext} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { ModeContext } from "../../Context/CartContext/CartContext";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navigation = () => {

  const {cartState} = useContext(ModeContext);

  return (
      <Navbar
        className="custom__navbar"
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="info"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Link to="/">
            <Navbar.Brand className="custom__navfont--navbrand">
              NFT Shop
            </Navbar.Brand>
          </Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-au1to">
              <Nav.Link
                className="custom__hover custom__navfont"
                as={Link}
                to="/category/common"
              >
                Common
              </Nav.Link>
              <Nav.Link
                className="custom__hover custom__navfont"
                as={Link}
                to="/category/rare"
              >
                Rare
              </Nav.Link>
              <Nav.Link
                className="custom__hover custom__navfont"
                as={Link}
                to="/category/epic"
              >
                Epic
              </Nav.Link>
              <Nav.Link
                className="custom__hover custom__navfont"
                as={Link}
                to="/category/legendary"
              >
                Legendary
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {cartState.length===0 ? null : <CartWidget />}
        </Container>
      </Navbar>
  );
};

export default Navigation;
