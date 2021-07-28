import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
              <LinkContainer to="/BudgetOverview">
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
