import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BucketEdit from "./Components/BucketEdit";
import BudgetOverview from "./Components/BudgetOverview";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={BudgetOverview} />
          <Route path="/EditBuckets" component={BucketEdit} />
          <Route path="/TransactionHistory" component={TransactionHistory} />
          <Route path="/AddTransaction" component={AddTransaction} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
