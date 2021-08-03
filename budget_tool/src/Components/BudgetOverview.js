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
<<<<<<< HEAD
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

=======
    totalBudget: "",
  };
>>>>>>> 13ca971f1f3f0314e15c67f8a49dbabcfc188dae
  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
<<<<<<< HEAD
      this.setState({ bucket: response.data });
=======
      console.log(response.data);
      let total = 0;
      for (var i in response.data) {
        total += response.data[i].amountGoal;
      }
      this.setState({ bucket: response.data, totalBudget: total });
>>>>>>> 13ca971f1f3f0314e15c67f8a49dbabcfc188dae
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

<<<<<<< HEAD


=======
>>>>>>> 13ca971f1f3f0314e15c67f8a49dbabcfc188dae
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
          <Row>
            <h2>Total Budget Amount: {this.state.totalBudget}</h2>
          </Row>
          {/* Start of the buket cards */}
          <BucketCards cardData={this.state.bucket} />
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
