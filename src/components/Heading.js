import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="white" className='rounded'>
      <Container className="d-flex justify-content-between">
        <NavbarBrand className="text-dark" href="/"><b>DASHBOARD</b></NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Heading