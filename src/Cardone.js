import React from "react";
import "./Cardone.css";
function Cardone({ title, Imagesrc, protiens, Crabs, fats }) {
  return (
     <div className="Cards_all_data"> 
      <div className="Card_width__">
        <img src={Imagesrc} alt="///image" />
        <h2 id="title1">{title}</h2>
        <div className="alldata">
          <p className="information">
            <p className="inf_data">
              <p>Fat:</p>
              <p id="DATA">{ fats}</p>
            </p>
          </p>
          <p className="information">
            <p className="inf_data">
              <p>Protien:</p>
              <p id="DATA">{protiens}</p>
            </p>
          </p>
          <p className="information">
            <p className="inf_data">
              <p>Crabs:</p>
              <p id="DATA">{ Crabs}</p>
            </p>
          </p>
        </div>
      </div>
      </div>
     
  );
}

export default Cardone;
