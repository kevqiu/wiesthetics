import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Form from './FormUserDetail.jsx'


createStore({
    orderDetails: {
        title: "",
    }
})

const Pages = () => {
    const location = useLocation();
    return (
        <>
          <nav className="container">
            <ul className="steps">
              <li className={location.pathname === "/step1" ? "active" : ""}>
                <Link to="/">Details</Link>
              </li>
              <li className={location.pathname === "/step2" ? "active" : ""}>
                <Link to="/step2">Details</Link>
              </li>
            </ul>
          </nav>
          <Route path="/step1" component={Form} />
          <Route path="/step2" component={Form} />
        </>
      );
}

function Wizard() {
    return (
      <StateMachineProvider>
        <div className="container">
          <h1>Form Wizard</h1>
  
          <Router>
            <Pages />
          </Router>
        </div>
      </StateMachineProvider>
    );
}

const rootElement = document.getElementById("root");
export default Wizard;