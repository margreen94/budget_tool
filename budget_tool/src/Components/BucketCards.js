import React, { Component } from "react";
import "../App.css";

import { Row } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Col } from "react-bootstrap";
import { images } from "./images";

export default class BucketCards extends Component {
  render() {
    const cards = [];
    for (var i in this.props.cardData) {
      let percentage
      let setColor = "green"
      
      percentage = (this.props.cardData[i].amountSpent/this.props.cardData[i].amountGoal) * 100;
      let widthPercent = percentage
      if(Number.isNaN(percentage)){
        percentage = 0.0
        widthPercent = 0.0
        console.log(widthPercent)
      }
      if(percentage>100.00){
        setColor = "red"
        widthPercent = 100.00
      }

      let cardLink = "/TransactionHistory?filter=" + this.props.cardData[i].name
      cards.push(
        <Col md={4} key={i} className="spacing">
          <Card>
            <Card.Img variant="top" src={images[(this.props.cardData[i].name).replace(/\s+/g, '')]} />
            <Card.Body>
              <Card.Title>{this.props.cardData[i].name}</Card.Title>
              <Card.Text>
                Overview of {this.props.cardData[i].name} spending
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Total Spent: ${this.props.cardData[i].amountSpent}
              </ListGroupItem>
              <ListGroupItem>
                Budget Goal: ${this.props.cardData[i].amountGoal}
              </ListGroupItem>
              <ListGroupItem>
                <div className="progress-bar" role="progressbar" id="bar"  style={{ width: ''+widthPercent+'%' , backgroundColor: setColor}}>
                  {percentage.toFixed(2)}% of Budget Spent
                </div>
              </ListGroupItem>
              <ListGroupItem>
                Amount Remaining: $
                {(
                  this.props.cardData[i].amountGoal -
                  this.props.cardData[i].amountSpent
                ).toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                Percent of Budget: {this.props.cardData[i].percent}%
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={cardLink}>See All {this.props.cardData[i].name} Transactions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
      
    }
    return <Row className="spacing">{cards}</Row>;
  }
}
