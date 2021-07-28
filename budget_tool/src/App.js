import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BucketEdit from "./Components/BucketEdit";
import BudgetOverview from "./Components/BudgetOverview";
import TransactionHistory from "./Components/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/BudgetOverview" component={BudgetOverview} />
          <Route path="/BucketEdit" component={BucketEdit} />
          <Route path="/TransactionHistory" component={TransactionHistory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
