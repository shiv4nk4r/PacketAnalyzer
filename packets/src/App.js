import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./Components/Splash/Splash";
import Home from "./Components/Home/Home";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { setUserSignedIn } from "./actions";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">{loggedIn ? <Home /> : <Splash />}</Route>
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
