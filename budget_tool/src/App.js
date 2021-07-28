import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BucketEdit from "./Components/BucketEdit";
import BudgetOverview from "./Components/BudgetOverview";
import TransactionHistory from "./Components/TransactionHistory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <BudgetOverview />
          </Route>
          <Route path="/bucketEdit">
            <BucketEdit />
          </Route>
          <Route path="/transactionHistory">
            <TransactionHistory />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
