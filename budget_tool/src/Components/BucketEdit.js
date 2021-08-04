import React, { Component } from "react";
import "../App.css";

import axios from "axios";

import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Row,
  Modal,
  Alert
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
      showAddError: false
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

  addNewBucket() {
    if(this.state.newBucketName !== ""){
      axios({
        url: "/addNewBucket",
        method: "POST",
        data: {name: this.state.newBucketName,
               percent: 0,
               accountId: 25,
               amountGoal: 0,
               amountSpent: 0}
      })
      window.location.reload(false);
    } else {
      this.setState({showAddError: true})
    }

  }

  handleNewBucketName(e) {
    this.setState({newBucketName: e.target.value})
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
          <Button  style={{ marginRight: "1em" }} type="submit" onClick={this.newSpendingMonth}>
            New Month
          </Button>
          <Button type="submit" onClick={() => {this.setState({showAddBucket: true})}}>
            Add Bucket
          </Button>
        </Container>




        <Modal 
        show={this.state.showAddBucket}
        onHide={() => this.setState({showAddBucket: false, newBucketName: ""})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Bucket
        </Modal.Title>
      </Modal.Header>
      
      <Alert show={this.state.showAddError} variant="danger" onClose={() => this.setState({showAddError: false})} dismissible>        
        <Alert.Heading>Invalid Selection</Alert.Heading>        
          <p>Please select a bucket name</p> 
      </Alert>
      <Modal.Body>
        
        <h4>Bucket Name:</h4>
        <form onChange={this.handleNewBucketName}>
          <input type="radio" id="Medical" name="newBucket" value="Medical"></input>
          <label for="Medical"> Medical</label><br></br>
          <input type="radio" id="Subscriptions" name="newBucket" value="Subscriptions"></input>
          <label for="Subscriptions"> Subscriptions</label><br></br>
          <input type="radio" id="Entertainment" name="newBucket" value="Entertainment"></input>
          <label for="Entertainment"> Entertainment</label><br></br>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.addNewBucket}>Submit</Button>
      </Modal.Footer>
    </Modal>
      </div>
    );
  }
}
