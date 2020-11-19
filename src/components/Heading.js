import React from "react";
import { Link } from "react-router-dom";
import {
  NavItem,
  Navbar,
  NavbarBrand,
  Container,
  Button,
  Nav
} from "reactstrap";

export default function Heading() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/"> My Team </NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
