import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              <MdHome style={{ fontSize: "22px" }} /> Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <NavLink to="/service" className="nav-link">
              Service
            </NavLink>
            <NavLink to="/products" className="nav-link">
              Our Products
            </NavLink>
            <NavLink to="/news" className="nav-link">
              News & Events
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>

          <Nav>
            <NavLink to="/login" className="nav-link">
              <RiLock2Fill />
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              <FaUser />
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
