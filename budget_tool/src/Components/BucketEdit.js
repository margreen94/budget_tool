import React, { Component } from "react";
import "../App.css";

import axios from "axios";

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";
import EditCards from "./EditCards";

export default class BucketEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bucket: [],
      editedIncome: 0,
      editedBuckets: [],
      totalBudget: "",
    };

    this.addToEditedBuckets = this.addToEditedBuckets.bind(this);
    this.editBucketsAPI = this.editBucketsAPI.bind(this);
    this.incomeChange = this.incomeChange.bind(this);
  }

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

  addToEditedBuckets(bucket) {
    var newlist = this.state.editedBuckets;
    var idList = [];
    for (var i in newlist) {
      idList.push(newlist[i].id);
    }

    if (idList.includes(bucket.id)) {
      for (var j in newlist) {
        if (newlist[j].id === bucket.id) {
          newlist[j].percent = bucket.percent;
        }
      }
    } else {
      newlist.push(bucket);
    }

    this.setState({ editeBuckets: newlist });
  }

  incomeChange(event) {
    this.setState({ editedIncome: event.target.value });
  }

  editBucketsAPI() {
    axios({
      url: "editBucket",
      method: "PUT",
      data: {
        income: this.state.editedIncome,
        buckets: this.state.editedBuckets,
        accountId: 25,
      },
    });
    window.location.reload(false);
  }
  newSpendingMonth() {
    axios({
      url: "newSpendingMonth",
      method: "POST",
      data: { id: 25 },
    });
    window.location.reload(false);
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center spacing">
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Estimated Montly Income:{" "}
              </InputGroup.Text>
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                id="TotalAmount"
                onChange={this.incomeChange}
              />
            </InputGroup>
          </Row>
        </Container>
        <Container>
          <EditCards
            editData={this.state.bucket}
            addFunc={this.addToEditedBuckets}
          />
          <Button
            style={{ marginRight: "1em" }}
            type="submit"
            value="Submit"
            onClick={this.editBucketsAPI}
          >
            Submit
          </Button>
          <Button type="submit" onClick={this.newSpendingMonth}>
            New Month
          </Button>
        </Container>
      </div>
    );
  }
}
