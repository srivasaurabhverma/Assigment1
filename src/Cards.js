import React, { useEffect, useState } from "react";
import "./Cards.css";
import Cardone from "./Cardone";
import db from "./Firebase";
function Cards({title1}) {
  const [Table, setTable] = useState([]);

  useEffect(() => {
    db.collection("Table").onSnapshot((snapshot) => {
      setTable(snapshot.docs.map((doc) => ({ id: doc.id, data1: doc.data() })));
    });
  }, []);
  return (
    <>
      <h1 className="Card_title__">{title1}</h1>
      <div className="Cards__">
        <Cardone title="Chole Bhatura" Imagesrc="https://www.cookforindia.com/wp-content/uploads/2015/12/chole-bhature-cover-e1451750029738.jpg" protiens="43.0cal" Crabs=" 206cal" fats=" 181cal" id={1} />
        <Cardone title="Veg Salad" Imagesrc="https://www.familyfoodonthetable.com/wp-content/uploads/2015/05/Marinated-summer-veggie-salad-720x405.png" protiens="14.2cal" Crabs="65.4cal" fats=" 7.14cal" id={1} />
        <Cardone title="Paneer Tikka" Imagesrc="https://www.bigfattummy.com/wp-content/uploads/2016/11/Paneer-Tikka-Tawa-Se-08-1200x675.jpg" protiens="41cal" Crabs=" 31cal" fats=" 198cal" id={1}/>
        <Cardone title="Butter Paneer" Imagesrc="https://www.vegrecipesofindia.com/wp-content/uploads/2013/04/paneer-butter-masala-fb.jpg" protiens="84cal" Crabs=" 433cal" fats=" 118cal" id={1} />
        <Cardone title="Chicken Chili" Imagesrc="https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg" protiens="152cal" Crabs=" 151cal" fats=" 57cal" id={1} />
        <Cardone title="Chicken Lollipop" Imagesrc="https://5.imimg.com/data5/JJ/BE/MY-17263151/schezwan-chicken-lollipops-500x500.png" protiens="233cal" Crabs="254cal" fats="161cal" id={1} />

        
        {
          Table.map((val)=>(
    
          <Cardone title={val.data1.dish_title} Imagesrc="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=" protiens={val.data1.protiens} Crabs={val.data1.crabs} fats={val.data1.fats}  />
        ))}
      </div>
    </>
  );
}

export default Cards;
