import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

import { Component } from "react";
import PieChart from "./PieChart";
import BucketCards from "./BucketCards";

export default class BudgetOverview extends Component {
  state = {
    bucket: [],
    totalBudget: "",
    article1: "",
    article2: "",
    article3: "",
    article4: "",
    article5: "",
  };

  getArticles(allArticles) {
    var arts = [];
    for (let i = 0; i < 5; i++) {
      arts.push(allArticles[i]);
    }
    this.setState({ articles: arts });
    console.log(this.state.articles[0].title);
  }

  removeTags(str) {
    if ((str===null) || (str===''))
    return false;
    else
    str = "" + str
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
 }

  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      this.setState({ bucket: response.data });
      let total = 0;
      for (var i in response.data) {
        total += response.data[i].amountGoal;
      }
      this.setState({ bucket: response.data, totalBudget: total });
    });

    axios.request({
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'personalfinance', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day', count: '100'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-key': '0a12f397b8mshe786cda4507c65dp1e9364jsn7e9f59679159',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
      }
    }).then((response) => {
      let max = response.data.value.length - 1;
      let min = 0;
      //this.getArticles(response.data.articles)
      this.setState({
        article1:
          response.data.value[Math.floor(Math.random() * (max - min * 2) + min * 2)],
        article2:
          response.data.value[Math.floor(Math.random() * (max - min * 2) + min * 2)],
        article3:
          response.data.value[Math.floor(Math.random() * (max - min * 2) + min * 2)],
        article4:
          response.data.value[Math.floor(Math.random() * (max / 2 - min) + min)],
        article5:
          response.data.value[Math.floor(Math.random() * (max / 2 - min) + min)],
      });
      
      //console.log(this.state.article1.title)
    });
  }
  //this.state.article1.image.thumbnail.contentUrl
  render() {
    
    return (
      <div>
        <Container className="spacing">
          {/* Pie chart */}
          <Row className="spacing">
            <Col>
              <PieChart pieData={this.state.bucket} />
            </Col>
          </Row>
          <Row>
            <h2>Total Budget Amount: ${this.state.totalBudget}</h2>
          </Row>
          {/* Start of the buket cards */}
          <BucketCards cardData={this.state.bucket} />
          {/* Start of news Article */}
          <h2>Some helpful financial articles:</h2>
          <Row className="spacing">
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.article1.name}</Card.Title>
                <Card.Text>{this.removeTags(this.state.article1.description)}</Card.Text>
                <Button
                  onClick={() => window.open(this.state.article1.url, "_blank")}
                  variant="primary"
                >
                  Go to Article
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.article2.name}</Card.Title>
                <Card.Text>{this.removeTags(this.state.article2.description)}</Card.Text>
                <Button
                  onClick={() => window.open(this.state.article2.url, "_blank")}
                  variant="primary"
                >
                  Go to Article
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.article3.name}</Card.Title>
                <Card.Text>{this.removeTags(this.state.article3.description)}</Card.Text>
                <Button
                  onClick={() => window.open(this.state.article3.url, "_blank")}
                  variant="primary"
                >
                  Go to Article
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.article4.name}</Card.Title>
                <Card.Text>{this.removeTags(this.state.article4.description)}</Card.Text>
                <Button
                  onClick={() => window.open(this.state.article4.url, "_blank")}
                  variant="primary"
                >
                  Go to Article
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.article5.name}</Card.Title>
                <Card.Text>{this.removeTags(this.state.article5.description)}</Card.Text>
                <Button
                  onClick={() => window.open(this.state.article5.url, "_blank")}
                  variant="primary"
                >
                  Go to Article
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
