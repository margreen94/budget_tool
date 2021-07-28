import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: 28 }} href="/">
            Bugdet Tool
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav style={{ fontSize: 20 }}>
              <Nav.Link href="/">Budget Overview</Nav.Link>
              <Nav.Link href="/bucketEdit">Bucket Edit</Nav.Link>
              <Nav.Link href="transactionHistory">Transaction History</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
