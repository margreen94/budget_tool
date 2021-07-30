import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import carimage from "../images/carimage.jpg";
import food from "../images/food.jpg";
import house from "../images/house.jpg";
import other from "../images/other.jpg";

export default function BudgetOverview() {
  return (
    <div>
      <Container>
        {/* Pie chart */}
        <Row className="spacing">insert pie chart here</Row>
        {/* Start of the buket cards */}
        <Row className="spacing">
          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={food} />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>Overview of Food spending</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Food Transactions</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={carimage} />
              <Card.Body>
                <Card.Title>Auto</Card.Title>
                <Card.Text>Overview of Auto spending</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Auto Transactions</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={house} />
              <Card.Body>
                <Card.Title>Home</Card.Title>
                <Card.Text>Overview of Home spending</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Home Transactions</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={other} />
              <Card.Body>
                <Card.Title>Other</Card.Title>
                <Card.Text>Overview of Other spending</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Other Transactions</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Start of news Article */}
        <Row className="spacing">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>News Article</Card.Title>
              <Card.Text>Display an article about finance maybe?</Card.Text>
              <Button variant="primary">Link to Article</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>News Article</Card.Title>
              <Card.Text>Display an article about finance maybe?</Card.Text>
              <Button variant="primary">Link to Article</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>News Article</Card.Title>
              <Card.Text>Display an article about finance maybe?</Card.Text>
              <Button variant="primary">Link to Article</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>News Article</Card.Title>
              <Card.Text>Display an article about finance maybe?</Card.Text>
              <Button variant="primary">Link to Article</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>News Article</Card.Title>
              <Card.Text>Display an article about finance maybe?</Card.Text>
              <Button variant="primary">Link to Article</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
