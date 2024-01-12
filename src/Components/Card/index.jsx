import React from "react";
import facebook from "../../assets/icon-facebook.svg";
import { Dashboard } from "../Dasboard";
import arquitecto from "../../assets/arquitecto.png";
import bombilla from "../../assets/bombilla.png";
import codificacion from "../../assets/codificacion.png";
import buscando from "../../assets/buscando.png";

export function Card() {
  return (
    <div className="dashboard_container">    
      <ul className="dashboard_card_container">
        <Dashboard followers={"Supervisor"} 
        title={"Monitors activity to identify project roadblocks"} 
        icon={buscando}
        colorClass={"blue"} />
      </ul>    

    <div className="middle_container">
      <ul className="dashboard_card_container">
        <Dashboard followers={"Team Builder"} title={"Scans our talent network to create the optimal team for your project"} icon={arquitecto} colorClass={"red"} />
      </ul>
      <ul className="dashboard_card_container">
        <Dashboard followers={"Karma"} title={"Regularly evaluates our talent to ensure quality"} icon={bombilla} colorClass={"yellow"} />
      </ul>
    </div>

    
      <ul className="dashboard_card_container">
        <Dashboard followers={"Calculator"} title={"Uses data from past project to provide better delivery estimates"} icon={codificacion} colorClass={"green"} />
      </ul>
   
  </div>
  );
}
