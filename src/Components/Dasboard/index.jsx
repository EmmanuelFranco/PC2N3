import React from "react";

export function Dashboard({ icon, followers, title, colorClass }) {
  return (
    <li className={`dashboard_card ${colorClass}`}>
      <div className="followers">
        <h3>{followers}</h3>
        <div className="title"> 
          <h5>{title}</h5>
        </div>
      </div>
      <div className="icon-container">
        <img src={icon} alt="arquitecto" className="profile-image" />
      </div>
    </li>
  );
}
