import React, { Component } from "react";
import "../App.css";
import axios from "axios";

import { Row } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Col } from "react-bootstrap";
function editBucket(id, percent) {
  axios({
    url: "editBucket/" + id,
    method: "PUT",
    data: {
      percent: percent,
    },
  });
}
export default class EditCards extends Component {
  render() {
    const cards = [];

    for (var i in this.props.editData) {
      let gettingName = this.props.editData[i].name;
      let gettingID = this.props.editData[i].id;
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
                id={this.props.editData[i].name}
                name="fname"
              ></input>

              <input
                type="submit"
                value="Submit"
                onClick={() =>
                  editBucket(
                    gettingID,
                    document.getElementById(gettingName).value
                  )
                }
              ></input>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">See All Food Transactions</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return <Row className="spacing">{cards}</Row>;
  }
}
