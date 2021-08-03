import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../images/favicon.png"

export default function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          {/* <LinkContainer to="/" exact style={{ fontSize: 28 }}> */}
          <img src={logo} className="logo"></img>
          <Navbar.Brand href="/" exact="true" style={{ fontSize: 28 }}>
            Budget Tool
          </Navbar.Brand>
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="mr-auto" style={{ fontSize: 20 }}>
              <LinkContainer to="/" exact={true}>
                <Nav.Link>Budget Overview</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/BucketEdit">
                <Nav.Link>Bucket Edit</Nav.Link>
              </LinkContainer>
              <LinkContainer to="TransactionHistory">
                <Nav.Link>Transaction History</Nav.Link>
              </LinkContainer>
              <LinkContainer to="AddTransaction">
                <Nav.Link>Add Transaction</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
