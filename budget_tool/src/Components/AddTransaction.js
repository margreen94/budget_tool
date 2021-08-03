import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/js/dist/dropdown";
import axios from "axios";
import { Component } from "react";

export default class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", vendor: "", tag: "", amount: "" };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleVendorChange = this.handleVendorChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.postToApi = this.postToApi.bind(this);
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

  postToApi(e) {
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


    render() {
        return (
            <div>
                <Container>
                <form>
        <h3>Date:</h3>
        <input type="date" className="form-control" placeholder="Date" onChange={this.handleDateChange}></input>
        <h3>Description:</h3>
        <input type="text" className="form-control" placeholder="Description" onChange={this.handleVendorChange}></input>
        <h3>Bucket:</h3>
            <div className="dropdown">
              <select onChange={this.handleTagChange}>
                <option value="" disabled defaultValue>
                  --Select Bucket--
                </option>
                <option value="Housing">Housing</option>
                <option value="Utilities">Utilities</option>
                <option value="Medical">Medical</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Auto">Auto</option>
                <option value="Vacation">Vacation</option>
                <option value="PersonalCare">Personal Care</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food">Food</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <h3>Amount:</h3>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                onChange={this.handleAmountChange}
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              ></input>
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
            <center>
              <button
                type="button"
                className="btn btn-success align-self-center"
                onClick={this.postToApi}
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
