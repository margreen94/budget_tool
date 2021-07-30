import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/js/dist/dropdown';
import axios from 'axios'
import { Component } from "react";


export default class AddTransaction extends Component {

    constructor(props){
        super(props)
        this.state = {date:'',vendor:'',tag:'',amount:''}
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleVendorChange = this.handleVendorChange.bind(this)
        this.handleTagChange = this.handleTagChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.postToApi = this.postToApi.bind(this)
    }
    handleDateChange(e){
        this.setState({date:e.target.value})
    }
    handleVendorChange(e){
        this.setState({vendor:e.target.value})
    }
    handleTagChange(e){
        this.setState({tag:e.target.value})
    }
    handleAmountChange(e){
        this.setState({amount:e.target.value})
    }

    postToApi(e){
        e.preventDefault()
        axios({
            url: "/addTransaction",
            method: "POST",
            data:{
                id: 2,
                accountId: 25,
                date:this.state.date,
                 displayName:this.state.vendor,
                  bucketTag:this.state.tag,
                   amount:this.state.amount
                }
          })
    }

    render() {
        return (
            <div>
                <Container>
                <form>
        <h3>Date:</h3>
        <input type="text" className="form-control" placeholder="Date" onChange={this.handleDateChange}></input>
        <h3>Vendor:</h3>
        <input type="text" className="form-control" placeholder="Vendor" onChange={this.handleVendorChange}></input>
        <h3>Tag:</h3>
            <div classNameName="dropdown">
            <select onChange={this.handleTagChange}>
                <option value="" disabled selected>--Select Tag--</option>
                <option value="Auto">Auto</option>
                <option value="Loans">Loans</option>
                <option value="Food">Food</option>
            </select>
        </div>
        <h3>Amount:</h3>
        
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">$</span>
            </div>
            <input type="text" onChange={this.handleAmountChange} className="form-control" aria-label="Amount (to the nearest dollar)"></input>
        <div className="input-group-append">
            <span className="input-group-text">.00</span>
        </div>
    </div>
    <center>
        <button type="button" className="btn btn-success align-self-center" onClick={this.postToApi}>Add Transaction</button>
    </center>

        </form>
      </Container> 
            </div>
        )
        }
}
