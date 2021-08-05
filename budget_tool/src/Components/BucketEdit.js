import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Row,
  Modal,
  Alert,
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
      showAddBucket: false,
      newBucketName: "",
      showAddError: false,
      budgetTotal:0

    };

    this.addToEditedBuckets = this.addToEditedBuckets.bind(this);
    this.editBucketsAPI = this.editBucketsAPI.bind(this);
    this.incomeChange = this.incomeChange.bind(this);
    this.addNewBucket = this.addNewBucket.bind(this);
    this.handleNewBucketName = this.handleNewBucketName.bind(this);
  }

  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      console.log(response.data);
      let total = 0;
      let budgetTot = 0;
      for (var i in response.data) {
        total += response.data[i].amountGoal;
        budgetTot += response.data[i].percent;
      }
      this.setState({ bucket: response.data, totalBudget: total, budgetTotal: budgetTot });
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

  editBucketsAPI(e) {
    e.preventDefault();

    const bID = this.state.editedBuckets.map(x => x["id"]);
    //var editedIds = this.state.editedBuckets.map(({ id }) => ({ id }));
    console.log(bID)
    var total = 0;
    for(var x = 0; x < this.state.bucket.length; x++){
      for(var j = 0; j< bID.length; j++){
       
        if(this.state.bucket[x].id != bID[j]){

          
          total += this.state.bucket[x]['percent'];
        }
      }
      
    }
    console.log(total);
    for(var x = 0; x < this.state.editedBuckets.length; x++){
      total += parseInt(this.state.editedBuckets[x]['percent'])
    }
    if(total > 100){
      alert("Cannot make a budget that is over 100%")
    } else {
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
  }
  newSpendingMonth() {
    axios({
      url: "newSpendingMonth",
      method: "POST",
      data: { id: 25 },
    });
    window.location.reload(false);
  }

  addNewBucket() {
    if (this.state.newBucketName !== "") {
      axios({
        url: "/addNewBucket",
        method: "POST",
        data: {
          name: this.state.newBucketName,
          percent: 0,
          accountId: 25,
          amountGoal: 0,
          amountSpent: 0,
        },
      });
      window.location.reload(false);
    } else {
      this.setState({ showAddError: true });
    }
  }

  handleNewBucketName(e) {
    this.setState({ newBucketName: e.target.value });
  }

  render() {
    var categories = [
      "Housing",
      "Utilities",
      "Medical",
      "Subscriptions",
      "Auto",
      "Vacation",
      "Personal Care",
      "Entertainment",
      "Food",
      "Miscellaneous",
    ];

    for (var i in this.state.bucket) {
      var index = categories.indexOf(this.state.bucket[i].name);
      if (index !== -1) {
        categories.splice(index, 1);
      }
    }

    var addList = [];
    for (var j in categories) {
      var tag = categories[j];
      addList.push(
        <div>
          <input type="radio" id={tag} name="newBucket" value={tag}></input>
          <label for={tag}>{tag}</label>
          <br></br>
        </div>
      );
    }

    return (
      <div className="footerFix">
        <Container className="spacing">
          <h1 style={{ textAlign: "center" }} class="display-4">
            Edit Buckets
          </h1>
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
            <EditCards editData={this.state.bucket} addFunc={this.addToEditedBuckets} />
            <Button
              variant="success"
              style={{ marginRight: "1em" }}
              type="submit"
              value="Submit"
              onClick={this.editBucketsAPI}
            >
              Submit
            </Button>
            <Button
              className="applyButton"
              style={{ marginRight: "1em" }}
              type="submit"
              onClick={this.newSpendingMonth}
            >
              New Month
            </Button>
            <Button
              className="applyButton"
              type="submit"
              onClick={() => {
                this.setState({ showAddBucket: true });
              }}
            >
              Add Bucket
            </Button>
          </Container>

          <Modal
            show={this.state.showAddBucket}
            onHide={() => this.setState({ showAddBucket: false, newBucketName: "" })}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Add New Bucket</Modal.Title>
            </Modal.Header>

            <Alert
              show={this.state.showAddError}
              variant="danger"
              onClose={() => this.setState({ showAddError: false })}
              dismissible
            >
              <Alert.Heading>Invalid Selection</Alert.Heading>
              <p>Please select a bucket name</p>
            </Alert>
            <Modal.Body>
              <h4>Bucket Name:</h4>
              <form onChange={this.handleNewBucketName}>{addList}</form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={this.addNewBucket}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}
