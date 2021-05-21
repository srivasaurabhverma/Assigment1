import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { icons } from "react-icons";
import db from "./Firebase";
import "./Form1.css";
 
function Editable() {
  const [Table, setTable] = useState([]);

  useEffect(() => {
    db.collection("Table").onSnapshot((snapshot) => {
      setTable(snapshot.docs.map((doc) => ({ id: doc.id, data1: doc.data() })));
    });
  }, []);

  Table.map((table) => {});
  const [columns, setColumns] = useState([
    { title: "Dish Name", field: "Dish_Title_" },
    { title: "Protiens", field: "Protiens", type: "numeric" },
    { title: "Fats", field: "Fat", type: "numeric" },
    {
      title: "Crabs",
      field: "Crabs",
      type: "numeric",
    },
    {
      title: "Calories",
      field: "calories",
      type: "numeric",
    },
  ]);

  const [data, setData] = useState([
    {
      Dish_Title_: "Chole Bhature",
      Protiens: 43,
      Fat: 121,
      Crabs: 206,
      calories: 370,
    },
    {
      Dish_Title_: "Veg Salad",
      Protiens: 14.2,
      Fat: 7.14,
      Crabs: 65.4,
      calories: 86.74,
    },
    {
      Dish_Title_: "Paneer Tikka",
      Protiens: 41,
      Fat: 191,
      Crabs: 31,
      calories: 263,
    },
    {
      Dish_Title_: "Butter Paneer",
      Protiens: 84,
      Fat: 118,
      Crabs: 433,
      calories: 635,
    },
    {
      Dish_Title_: "Chicken Chili",
      Protiens: 152,
      Fat: 57,
      Crabs: 157,
      calories: 329,
    },
    {
      Dish_Title_: "Chicken Lollipop",
      Protiens: 233,
      Fat: 161,
      Crabs: 254,
      calories: 648,
    },
  ]);

  // let crabarr = new Array();

  // data.forEach((crab) => {
  //   crabarr.push(crab.Crabs);
  // });

  // let Protienarr = new Array();

  // data.forEach((crab) => {
  //   Protienarr.push(crab.Protiens);
  // });

  // let Fatarr = new Array();

  // data.forEach((crab) => {
  //   Fatarr.push(crab.Fat);
  // });

  // let Caloriesarr = new Array();

  // data.forEach((crab) => {
  //   Caloriesarr.push(crab.calories);
  // });

  // localStorage.setItem("Carabs", crabarr.toString());
  // localStorage.setItem("Protiens", Protienarr.toString());
  // localStorage.setItem("Fat", Fatarr.toString());
  // localStorage.setItem("Calories", Caloriesarr.toString());

  // data.forEach((data_) => {
  //   db.collection("Table1").add({
  //     calories: data_.calories,
  //     crabs: data_.Crabs,
  //     dish_title: data_.Dish_Title_,
  //     fats: data_.Fat,
  //     protiens: data_.Protiens,
  //   }).then((done)=>{
  //     console.log("1");
  //   }).catch(()=>{
  //     console.log("error")
  //   })
  // });

  // const Savedata = () => {
  //   data.forEach((data_) => {
  //     db.collection("Table")
  //       .add({
  //         calories: data_.calories,
  //         crabs: data_.Crabs,
  //         dish_title: data_.Dish_Title_,
  //         fats: data_.Fat,
  //         protiens: data_.Protiens,
  //       })
  //       .then((done) => {
  //         console.log("1");
  //       })
  //       .catch(() => {
  //         console.log("error");
  //       });
  //   });
  // };

  return (
    <>
    <h1 id="data_adede"></h1>
       
      <div className="container___">
        <MaterialTable
          title="Dish Details"
          columns={columns}
          data={data}
          style={{ color: "Black", fontSize: "large", fontWeight: "400" }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                   
                   
                  resolve();
                  
                  db.collection("Table").add({
                    calories: newData.calories,
                    crabs: newData.Crabs,
                    dish_title: newData.Dish_Title_,
                    fats: newData.Fat,
                    protiens: newData.Protiens,
                  }).then(()=>{
                    let title = document.getElementById('data_adede').innerHTML = "Data Adeded Succesfully"
                  });
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                 
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                   
                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    </>
  );
}

export default Editable;
