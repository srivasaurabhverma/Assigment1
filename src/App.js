import React from "react";
import Admin from "./Admin";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router";
import Table from "./Table";
import Users from './Users';
 
import "./App.css";
import Table1 from "./Table";
import Login from "./Login";
let user = true;
function App() {
  return (
    <>
       
      <div className="app">
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Login}/>
            <Route exact path="/Admin" component={Admin}/>
            <Route exact path="/Table" component={Table1}/>
            <Route exact path="/User" component={Users}/>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
