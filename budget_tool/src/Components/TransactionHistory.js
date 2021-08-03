import axios from "axios";
import { Table } from "react-bootstrap";

import React, { Component } from "react";
import "../App.css";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllTransactions: [],
      filtered: [],
      date: "all",
      bucket: "allBuckets",
    };
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleDateChange(e) {
    var currDate = new Date();
    var currMonth = (currDate.getMonth() + 1).toString();
    if (currMonth.length === 1) {
      currMonth = "0" + currMonth;
    }
    this.setState({ date: e.target.value });
    // var currYear = currDate.getFullYear();
    // if (e.target.value === "all") {
    //   this.componentDidMount();
    // }
    // if (e.target.value === "current") {
    //   const result = this.state.AllTransactions.filter(
    //     (obj) => obj["date"].slice(0, 2) === currMonth
    //   );
    //   this.setState({ filtered: result });
    // } else {
    //   const res = this.state.AllTransactions.filter(
    //     (obj) => obj["date"].slice(0, 2) === e.target.value.slice(0, 2)
    //   );
    //   this.setState({ filtered: res });
    // }

    // this.setState({ date: currMonth });
  }

  handleFilter(e) {
    e.preventDefault();
    console.log(this.state.date);
    console.log(this.state.bucket);
    console.log(this.state.filtered);
    console.log("made it");

    var currDate = new Date();
    var currMonth = (currDate.getMonth() + 1).toString();
    if (currMonth.length === 1) {
      currMonth = "0" + currMonth;
    }
    var result = [];

    if (this.state.date === "all") {
      result = this.state.AllTransactions;
    } else {
      if (this.state.date === "current") {
        result = this.state.AllTransactions.filter(
          (obj) => obj["date"].slice(0, 2) === currMonth
        );
        // this.setState({ filtered: result });
      } else {
        result = this.state.AllTransactions.filter(
          (obj) => obj["date"].slice(0, 2) === this.state.date.slice(0, 2)
        );
      }
    }

    this.setState({ filtered: result }, () => {
      this.checkTag();
    });
  }

  checkTag() {
    console.log(this.state.filtered);
    if (this.state.bucket === "allBuckets") {
      this.setState({ filtered: this.state.filtered });
    } else {
      const result = this.state.filtered.filter(
        (obj) => obj["bucketTag"] === this.state.bucket
      );
      this.setState({ filtered: result });
    }
    console.log(this.state.filtered);
  }
  handleTagChange(e) {
    // console.log("yo");
    // if (e.target.value === "allBuckets") {
    //   this.setState({ filtered: this.state.AllTransactions });
    // } else {
    //   const result = this.state.AllTransactions.filter(
    //     (obj) => obj["bucketTag"] === e.target.value
    //   );
    //   this.setState({ filtered: result });
    // }

    this.setState({ bucket: e.target.value });
  }
  componentDidMount() {
    <div id="container"></div>;
    axios({
      url: "/getTransaction",
      method: "GET",
    }).then((response) => {
      this.setState({
        AllTransactions: response.data,
        filtered: response.data,
      });
    });
  }

  render() {
    // <div id="container"></div>;

    var bodyRows = [];
    for (var i = 0; i < this.state.filtered.length; i++) {
      bodyRows.push(
        <tr>
          <td>{this.state.filtered[i]["date"]}</td>
          <td>{this.state.filtered[i]["displayName"]}</td>
          <td>${this.state.filtered[i]["amount"].toFixed(2)}</td>
          <td>{this.state.filtered[i]["bucketTag"]}</td>
        </tr>
      );
    }

    return (
      <div className="transTable">
        <h1>Transaction History</h1>
        <h3>Filter</h3>
        <div>
          <form onSubmit={this.handleFilter}>
            <h6>Date</h6>
            <div className="dropdown">
              <select onChange={this.handleDateChange}>
                {/* <option  value="" disabled>
                  --Select Month--
                </option> */}
                <option value="all">All Transactions</option>
                <option value="current">Current Month</option>
                <option value="0721">July 2021</option>
                <option value="0621">June 2021</option>
                <option value="0521">May 2021</option>
              </select>
            </div>
            <h6>Bucket</h6>
            <div className="dropdown">
              <select onChange={this.handleTagChange}>
                <option value="" disabled>
                  --Select Bucket--
                </option>
                <option value="allBuckets">All Buckets</option>
                <option value="Car">Car</option>
                <option value="General">General</option>
                <option value="Food">Food</option>
              </select>
            </div>
            <button type="submit">Apply Filter</button>
          </form>
        </div>
        <Table striped bordered hover>
          <thead>
            <th>
              {" "}
              Date
              {/* <div className="dropdown">
                <select onChange={this.handleDateChange}>
                  <option value="all">All Transactions</option>
                  <option value="current">Current Month</option>
                  <option value="0721">July 2021</option>
                  <option value="0621">June 2021</option>
                  <option value="0521">May 2021</option>
                </select>
              </div> */}
            </th>
            <th>Description</th>
            <th>Amount</th>
            <th>Bucket</th>
          </thead>
          <tbody>{bodyRows}</tbody>
        </Table>
      </div>
    );

    // this.renderTable();
    // <div>
    //   <h1>Transaction History</h1>
    //   <table className="table">
    //     <tr>
    //       <th>Date</th>
    //       <th>Description</th>
    //       <th>Amount</th>
    //       <th>Bucket</th>
    //     </tr>
    //     <tr>
    //       <td>07/09/2021</td>
    //       <td>Home Depot</td>
    //       <td>21.64</td>
    //       <td>General</td>
    //     </tr>
    //   </table>
    // </div>
  }
}
