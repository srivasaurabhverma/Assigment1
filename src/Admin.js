import { Redirect, Route } from "react-router";
import { Switch } from "react-router";
import React from "react";
import Cards from "./Cards";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import { BrowserRouter } from "react-router-dom";
import Table1 from "./Table";
function Admin() {
  return (
    <>
      <Header Imgsrc='https://cdn5.f-cdn.com/contestentries/1733723/43055135/5e49ec7ad607a_thumb900.jpg'/>
      <div className="admin">
        <Sidebar username="A D M I N" />
        <Cards title1="Some Suggestions" />
         
        {/* <Form /> */}
      </div>
    </>
  );
}

export default Admin;
