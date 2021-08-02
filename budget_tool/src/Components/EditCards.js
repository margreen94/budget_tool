import React, { Component } from "react";
import "../App.css";

import { Row } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Col } from "react-bootstrap";

export default class EditCards extends Component {

  constructor(props){
    super(props)
    this.setEditedBuckets = this.setEditedBuckets.bind(this)
  }

  setEditedBuckets(e){
    this.props.addFunc({id: e.target.id, percent: e.target.value })
  }

  render() {
    const cards = [];

    for (var i in this.props.editData) {
      cards.push(
        <Col md={4} key={i} className="spacing">
          <Card>
            <Card.Body>
              <Card.Title>{this.props.editData[i].name}</Card.Title>
              <Card.Text>
                Overview of {this.props.editData[i].name} spending
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Total Spent: {this.props.editData[i].amountSpent}
              </ListGroupItem>
              <ListGroupItem>
                Budget Goal: {this.props.editData[i].amountGoal}
              </ListGroupItem>
              <ListGroupItem>
                Percent of Budget: {this.props.editData[i].percent}
              </ListGroupItem>
              <input
                type="number"
                id={this.props.editData[i].id}
                name="fname"
                onChange={this.setEditedBuckets}
              ></input>
            </ListGroup>
          </Card>
        </Col>
      );
    }
    return <Row className="spacing">{cards}</Row>;
  }
}
