import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">Company Name</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          {/* <Link to="/viewclients" className="nav-link">View Clients</Link> */}
          {/* <Link to="/addclients" className="nav-link">Add Clients</Link> */}
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Client Master</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/viewclients" className="nav-link">View Clients</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addclients" className="nav-link">Add Clients</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;