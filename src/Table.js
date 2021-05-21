import React, { useEffect, useState } from "react";
import "./Table.css";
 
import Form1 from "./Form1";
import Header from "./Header";
import Sidebar from "./Sidebar";
import db from "./Firebase";

function Table1() {
  const [Table, setTable] = useState([]);

  useEffect(() => {
    db.collection("Table1").onSnapshot((snapshot) => {
      setTable(snapshot.docs.map((doc) => ({ id: doc.id, data1: doc.data() })));
    });
  }, []);
  console.log(Table);
  return (
    <>
      <Header Imgsrc="https://cdn5.f-cdn.com/contestentries/1733723/43055135/5e49ec7ad607a_thumb900.jpg"/>
      <Sidebar username="A D M I N"/>
      <Form1/>
    </>
  );
}

export default Table1;
