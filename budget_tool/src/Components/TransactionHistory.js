// import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

import React, { Component } from "react";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { AllTransactions: [] };
  }
  componentDidMount() {
    <div id="container"></div>;
    axios({
      url: "/getTransaction",
      method: "GET",
    }).then((response) => {
      console.log(response.data);
      this.setState({ AllTransactions: response.data });
    });
    // .then((resp) => {
  }

  render() {
    // <div id="container"></div>;


    var bodyRows = []
    for (var i = 0; i < this.state.AllTransactions.length; i++) {
      bodyRows.push(
        <tr>
          <td>{this.state.AllTransactions[i]["date"]}</td>
          <td>{this.state.AllTransactions[i]["displayName"]}</td>
          <td>${this.state.AllTransactions[i]["amount"].toFixed(2)}</td>
          <td>{this.state.AllTransactions[i]["bucketTag"]}</td>

        </tr>
      )
    }

    return <div>

      <Table striped bordered hover>
        <thead>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Bucket</th>
        </thead>
        <tbody>
          {bodyRows}
        </tbody>
      </Table>

    </div>;


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
