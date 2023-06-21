import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import { MdHome } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-link">
              <MdHome style={{ fontSize: "22px" }} /> Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/service" className="nav-link">
              Service
            </Link>
            <Link to="/works" className="nav-link">
              Our Works
            </Link>
            <Link to="/news" className="nav-link">
              News & Events
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </Nav>

          <Nav>
            <Link to="/login" className="nav-link">
              <RiLock2Fill />
              Login
            </Link>
            <Link to="/register" className="nav-link">
              <FaUser />
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
