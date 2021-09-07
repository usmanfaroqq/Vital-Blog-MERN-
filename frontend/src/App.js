import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/common/Navbar/MainNavbar";
import NotFound from "./components/common/Notfound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import "./scss/main.scss";
import PrivateRoutes from "./Private/PrivateRoutes";
import RouteLinks from "./Private/RouteLinks";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <RouteLinks path="/register" exact component={props => <div> <Navbar/> <Register/></div> } />
          <RouteLinks path="/login" exact component={props => <div> <Navbar/> <Login/></div> } />
          <PrivateRoutes path="/dashboard" exact  component={props => <div> <Navbar/> <Dashboard/></div> }/>
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
  );
};

export default App;
