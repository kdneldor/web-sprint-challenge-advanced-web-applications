import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <h1>Welcome to the Bubble App</h1>
        <Link to="/protected">Bubble Page</Link>

        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
