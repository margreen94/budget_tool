import React from "react";
import axios from "axios";

function getPercentage(e){
  e.preventDefault()
  axios({
    url: "localhost:8080/getByAccountId/25",
    method: "GET",
  }).then((response) => {
    console.log(response)
  }).catch(function (error) {
        console.log(error);  
      })

  }

export default function BucketEdit() {

  

  return (
    <div>
      <h1>Bucket </h1>
      <form>
        <label>Car Percentage:<input type='text'></input></label>
        <input type='submit' onClick={getPercentage}></input>
      </form>
    </div>
  );
}
