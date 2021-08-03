import React, { Component } from "react";

import axios from "axios";

import { Container } from "react-bootstrap";
import EditCards from "./EditCards";

export default class BucketEdit extends Component {
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
          <EditCards editData={this.state.bucket} />
          {/* <Row>
          <Col>
            <Card style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title>Food</Card.Title>
                  <Card.Text>
                    Overview of Food spending
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
                <input type="number" id="food" name="fname"></input>
                  
                <input type="submit" value="Submit" onClick= {()=>editBucket(1,document.getElementById("food").value)}></input>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Food Transactions</Card.Link>
              </Card.Body>
            </Card>  
          </Col>

          <Col>
            <Card style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title>Auto</Card.Title>
                  <Card.Text>
                    Overview of Auto spending
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget 
                </ListGroupItem>
                <input type="number" id="auto" name="fname"></input>
                  
                <input type="submit" value="Submit" onClick={()=>editBucket(2,document.getElementById("auto").value)}></input>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Auto Transactions</Card.Link>
              </Card.Body>
            </Card>  
          </Col>
          <Col>
            <Card style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title>Home</Card.Title>
                  <Card.Text>
                    Overview of Home spending
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
                <input type="number" id="home" name="fname"></input>
                  
                <input type="submit" value="Submit" onClick={()=>editBucket(3,document.getElementById("home").value)}></input>
                  
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Home Transactions</Card.Link>
              </Card.Body>
            </Card>  
          </Col>

          <Col>
            <Card style={{ width: '19rem' }}>
              <Card.Body>
                <Card.Title>Other</Card.Title>
                  <Card.Text>
                    Overview of Other spending
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Total Spent</ListGroupItem>
                <ListGroupItem>Amount</ListGroupItem>
                <ListGroupItem>Percent of Budget</ListGroupItem>
                <input type="number" id="other" name="fname"></input>
                  
                <input type="submit" value="Submit" onClick={()=>editBucket(4,document.getElementById("other").value)}></input>
                  
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See All Other Transactions</Card.Link>
              </Card.Body>
            </Card>  
          </Col>
        </Row> */}
        </Container>
      </div>
    );
  }
}
