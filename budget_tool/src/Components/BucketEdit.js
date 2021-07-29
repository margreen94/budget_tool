import React, { Component } from 'react'
import axios from "axios";
import SingleBucketEdit from './SingleBucketEdit';



export default class BucketEdit extends Component {

  state = {
    BucketData: null
  };
  
  componentDidMount() {
    // e.preventDefault()
    axios({
      url: "/getByAccountId/25",
      method: "GET",
    }).then((response) => {
      this.setState({BucketData: response.data})
    })
  }
  



  render() {

    var buckets = []
    for(var i in this.state.BucketData) {
      var bucket = this.state.BucketData[i];
      buckets.push(<SingleBucketEdit name={bucket.name} percent={bucket.percent}/>)
    }

    return (
      <div>
        <h1>EDIT BUCKET SETTINGS</h1>
        <form>
        {buckets}     
        <input type='submit'></input>
        </form>
      </div>
    )
  }
}

