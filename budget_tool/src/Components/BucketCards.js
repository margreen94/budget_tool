import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Col } from "react-bootstrap";
import { images } from "./images";

export default class BucketCards extends Component {
  render() {
    const cards = [];

    for (var i in this.props.cardData) {
      cards.push(
        <Col key={i}>
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={images[this.props.cardData[i].name]} />
            <Card.Body>
              <Card.Title>{this.props.cardData[i].name}</Card.Title>
              <Card.Text>
                Overview of {this.props.cardData[i].name} spending
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Total Spent: {this.props.cardData[i].amountSpent}
              </ListGroupItem>
              <ListGroupItem>
                Budget Goal: {this.props.cardData[i].amountGoal}
              </ListGroupItem>
              <ListGroupItem>
                Amount Remaining:{" "}
                {(
                  this.props.cardData[i].amountGoal -
                  this.props.cardData[i].amountSpent
                ).toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                Percent of Budget: {this.props.cardData[i].percent}
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">See All Food Transactions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return <div>{cards}</div>;
  }
}
