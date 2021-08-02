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
import axios from "axios";

import { Component } from "react";
import PieChart from "./PieChart";
import BucketCards from "./BucketCards";

export default class BudgetOverview extends Component {
  state = {
    bucket: [],
    totalBudget: "",
  };
  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      console.log(response.data);
      let total = 0;
      for (var i in response.data) {
        total += response.data[i].amountGoal;
      }
      this.setState({ bucket: response.data, totalBudget: total });
    });
  }

  render() {
    return (
      <div>
        <Container>
          {/* Pie chart */}
          <Row className="spacing">
            <Col>
              <PieChart pieData={this.state.bucket} />
            </Col>
          </Row>
          <Row>
            <h2>Total Budget Amount: {this.state.totalBudget}</h2>
          </Row>
          {/* Start of the buket cards */}
          <BucketCards cardData={this.state.bucket} />
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
}
