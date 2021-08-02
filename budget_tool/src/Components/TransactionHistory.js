// import React from "react";
import axios from "axios";

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
      this.renderTable();
    });
    // .then((resp) => {
  }

  renderTable() {
    // console.log("made it");
    var rows = ["Date", "Description", "Amount", "Bucket"];
    var html = "<table class=table>";
    html += "<tr>";
    for (var j = 0; j < rows.length; j++) {
      html += "<th scope=col>" + rows[j] + "</th>";
    }
    html += "</tr>";
    for (var i = 0; i < this.state.AllTransactions.length; i++) {
      // console.log(this.state.AllTransactions[i]);
      html += "<tr>";
      html += "<td>" + this.state.AllTransactions[i]["date"] + "<td>";
      html += "<td>" + this.state.AllTransactions[i]["displayName"] + "<td>";
      html += "<td>" + this.state.AllTransactions[i]["amount"] + "<td>";
      html += "<td>" + this.state.AllTransactions[i]["bucketTag"] + "<td>";
      // for (var j in this.state.AllTransactions[i]) {
      //   html += "<td>" + this.state.AllTransactions[i][j] + "</td>";
      // }
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("container").innerHTML = html;
  }

  render() {
    // <div id="container"></div>;

    return <div id="container"></div>;

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
