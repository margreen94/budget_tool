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
import carimage from "../images/carimage.jpg";
import food from "../images/food.jpg";
import house from "../images/house.jpg";
import other from "../images/other.jpg";

import { Component } from "react";
import PieChart from "./PieChart";

export default class BudgetOverview extends Component {
  state = {
    bucket: [],
    article1: "",
    article2: "",
    article3: "",
    article4: "",
    article5: ""
  };

  getArticles(allArticles){
    var arts = []
    for(let i = 0; i < 5; i++){
      arts.push(allArticles[i])
    }
    this.setState({articles: arts});
    console.log(this.state.articles[0].title)
  }

  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      this.setState({ bucket: response.data });
    });

    axios({
      url: "https://newsapi.org/v2/everything?q=\"personal%20finance\"&language=en&apiKey=e431dd0a8f96426ebc5c52a5a61302d0",
      method: "GET",
    }).then((response) => {
      //this.getArticles(response.data.articles)
      this.setState({article1: response.data.articles[(Math.floor(Math.random() * (response.data.articles.length - 0 + 1)) + 0)],
        article2: response.data.articles[(Math.floor(Math.random() * (response.data.articles.length - 5 + 1)) + 5)],
        article3: response.data.articles[(Math.floor(Math.random() * (response.data.articles.length - 9 + 1)) + 9)],
        article4: response.data.articles[(Math.floor(Math.random() * (response.data.articles.length - 4 + 1)) + 4)],
        article5: response.data.articles[(Math.floor(Math.random() * (response.data.articles.length - 7 + 1)) + 7)],});
      //console.log(this.state.article1.title)
    });
  }



  render() {
    console.log(this.state.articles);
    return (
      <div>
        <Container>
          {/* Pie chart */}
          <Row className="spacing">
            <Col>
              <PieChart pieData={this.state.bucket} />
            </Col>
          </Row>
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
              {/* <Card.Img variant="top" src={this.state.article1.urlToImage} /> */}
              <Card.Body>
                <Card.Title>{this.state.article1.title}</Card.Title>
                <Card.Text>{this.state.article1.description}</Card.Text>
                <Button onClick={()=> window.open(this.state.article1.url, "_blank")} variant="primary">Go to Article</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              {/* <Card.Img variant="top" src={this.state.article2.urlToImage} /> */}
              <Card.Body>
                <Card.Title>{this.state.article2.title}</Card.Title>
                <Card.Text>{this.state.article2.description}</Card.Text>
                <Button onClick={()=> window.open(this.state.article2.url, "_blank")} variant="primary">Go to Article</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              {/* <Card.Img variant="top" src={this.state.article3.urlToImage} /> */}
              <Card.Body>
                <Card.Title>{this.state.article3.title}</Card.Title>
                <Card.Text>{this.state.article3.description}</Card.Text>
                <Button onClick={()=> window.open(this.state.article3.url, "_blank")} variant="primary">Go to Article</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              {/* <Card.Img variant="top" src={this.state.article4.urlToImage} /> */}
              <Card.Body>
                <Card.Title>{this.state.article4.title}</Card.Title>
                <Card.Text>{this.state.article4.description}</Card.Text>
                <Button onClick={()=> window.open(this.state.article4.url, "_blank")} variant="primary">Go to Article</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              {/* <Card.Img variant="top" src={this.state.article5.urlToImage} /> */}
              <Card.Body>
                <Card.Title>{this.state.article5.title}</Card.Title>
                <Card.Text>{this.state.article5.description}</Card.Text>
                <Button onClick={()=> window.open(this.state.article5.url, "_blank")} variant="primary">Go to Article</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
