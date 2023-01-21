import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

export default function MenuBar({children}){
    return (
        <Navbar className="p-2"  expand='lg' bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Competitive Prog. Profile</Nav.Link>
            <Nav.Link href="">Achievements</Nav.Link>
            <Nav.Link href="#">Project</Nav.Link>
            <Nav.Link href="">My Resume</Nav.Link>
            <Nav.Link href="">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}