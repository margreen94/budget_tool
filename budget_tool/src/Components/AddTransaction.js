import React from "react";
import { Container, Alert } from "react-bootstrap";
import "bootstrap/js/dist/dropdown";
import axios from "axios";
import { Component } from "react";

export default class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", vendor: "", tag: "", amount: "", bucketData: [], showError: false, errorList: [] };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.postToApi = this.postToApi.bind(this);
    this.checkOptionSelection = this.checkOptionSelection.bind(this);
  }
  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }
  handleVendorChange(e) {
    this.setState({ vendor: e.target.value });
  }
  handleTagChange(e) {
    this.setState({ tag: e.target.value });
  }
  handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  postToApi() {
    axios({
      url: "/addTransaction",
      method: "POST",
      data: {
        accountId: 25,
        date: this.state.date,
        displayName: this.state.vendor,
        bucketTag: this.state.tag,
        amount: this.state.amount,
      },
    });
    
  }

  componentDidMount() {
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      this.setState({ bucketData: response.data});
    });
  }


  checkOptionSelection() {
    var errors = []
    if(this.state.date === "") {
      errors.push("Date")
    } 
    if(this.state.vendor === "") {
      errors.push("Description")
    } 
    if(this.state.tag === "") {
      errors.push("Bucket")
    } 
    if(this.state.amount === "") {
      errors.push("Amount")
    } 

    if(errors.length !== 0) {
      this.setState({showError: true, errorList: errors})
    }    
    else {
      this.postToApi();
      window.location.reload(false);
    }
    
  }
  


    render() {
      var options = []
      for(var i in this.state.bucketData) {

        options.push(
          <option key={i} value={this.state.bucketData[i].name}>{this.state.bucketData[i].name}</option>
        )
      }
      
      var errorMsg = ""
      for(var j in this.state.errorList) {
        if(errorMsg === ""){
          errorMsg += this.state.errorList[j]
        } else{
          errorMsg += ", " + this.state.errorList[j]
        }
        
      }

      return (
            <div>
                <Container>
                <form>
                <Alert show={this.state.showError} variant="danger" onClose={() => this.setState({showError: false})} dismissible>        
          <Alert.Heading>Invalid Selection</Alert.Heading>        
          <p>Please double check your input for the following fields:</p>  
          <p>{errorMsg}</p>    
        </Alert>
        <h3>Date:</h3>
        <input type="date" className="form-control" placeholder="Date" onChange={this.handleDateChange}></input>
        <h3>Description:</h3>
        <input type="text" className="form-control" placeholder="Description" onChange={this.handleVendorChange}></input>
        <h3>Bucket:</h3>
            <div className="dropdown">
              <select onChange={this.handleTagChange}>
                <option value="" defaultValue>
                  --Select Bucket--
                </option>
                {options}
              </select>
            </div>

            <h3>Amount:</h3>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                onChange={this.handleAmountChange}
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              ></input>
            </div>
            <center>
              <button
                type="button"
                className="btn btn-success align-self-center"
                onClick={this.checkOptionSelection}
              >
                Add Transaction
              </button>
            </center>
          </form>
        </Container>
      </div>
    );
  }
}
