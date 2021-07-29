import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/js/dist/dropdown';


export default function AddTransaction() {
  console.log("worthless");

  return (
    <div>
      <Container>
        <form>
        <h3>Type:</h3>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Transaction Type
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Expense</a></li>
                <li><a class="dropdown-item" href="#">Income</a></li>
            </ul>
        </div>
        <h3>Vendor:</h3>
        <input type="text" class="form-control" placeholder="Vendor"></input>
        <h3>Tag:</h3>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Tag
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Auto</a></li>
                <li><a class="dropdown-item" href="#">Home</a></li>
                <li><a class="dropdown-item" href="#">Food</a></li>
                <li><a class="dropdown-item" href="#">Loans</a></li>
                <li><a class="dropdown-item" href="#">Luxury</a></li>
            </ul>
        </div>
        <h3>Amount:</h3>
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
        <div class="input-group-append">
            <span class="input-group-text">.00</span>
        </div>
    </div>
    <center>
        <button type="button" class="btn btn-success align-self-center" >Add Transaction</button>
    </center>

        </form>
      </Container>
    </div>
  );
}
