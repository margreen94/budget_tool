import React, { Component } from "react";
import "../App.css";

import { Row } from "react-bootstrap";
import { Card, ListGroupItem, ListGroup, Col, CloseButton, Button, Modal } from "react-bootstrap";
import axios from "axios";

export default class EditCards extends Component {

  constructor(props){
    super(props)
    this.setEditedBuckets = this.setEditedBuckets.bind(this)
    this.deleteBucket = this.deleteBucket.bind(this)
    this.showConfirmDelete = this.showConfirmDelete.bind(this)
    this.state = {showConfirmDelete: false, deleteIndex: -1}
  }

  setEditedBuckets(e){
    this.props.addFunc({id: e.target.id, percent: e.target.value })
  }

  deleteBucket(e) {
    console.log(this.state.deleteIndex)
    var i = this.state.deleteIndex
    axios({
      url: "/deleteBucket",
      method: "DELETE",
      data: {
        id: this.props.editData[i].id,
        // accountId: this.props.editData[i].accountId,
        // name: this.props.name,
        // percent: this.props.percent,
        // amountSpent: this.props.amountSpent,
        // amountGoal: this.props.amountGoal
      }
    })
    window.location.reload(false);
  }

  showConfirmDelete(e) {
    console.log(e.target.value)
    this.setState({showConfirmDelete: true, deleteIndex: e.target.value})
  }



  render() {
    const cards = [];

    for (var i in this.props.editData) {
      cards.push(
        <Col md={4} key={i} className="spacing">
          <Card>
            <Card.Body>

            <CloseButton id={i} value={i} onClick={this.showConfirmDelete}/>

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
    return <Row className="spacing">{cards}

              <Modal 
        show={this.state.showConfirmDelete}
        onHide={() => this.setState({showConfirmDelete: false})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Bucket
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      <p>Are you sure you want to delete this bucket?</p>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.deleteBucket}>Yes</Button>
      </Modal.Footer>
    </Modal>
    
    </Row>;
  }
}
