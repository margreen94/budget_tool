import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/" style={{ fontSize: 28 }}>
            <Navbar.Brand>Bugdet Tool</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav style={{ fontSize: 20 }}>
              <LinkContainer to="/">
                <Nav.Link>Budget Overview</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/BucketEdit">
                <Nav.Link>Bucket Edit</Nav.Link>
              </LinkContainer>
              <LinkContainer to="TransactionHistory">
                <Nav.Link>Transaction History</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
