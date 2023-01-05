import React from "react";
import "../styles.css";
function Card(props) {
    let badgeText;
    if(props.openSpots===0){
        badgeText="SOLD OUT!"
    }else{
        badgeText="ONLINE!"
    }
  return (
    <div className="card">
      {/* {props.openSpots === 0 && <div className="card--badge">Sold Out!</div>} */}
      {/* If first condition is false then the second condition would not run */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" />
      <div className="card--stats">
        <span>⭐ {props.item.stats.rating} </span>
        <span className="gray">({props.item.stats.reviewCount}) </span>
        <span className="gray">{props.item.country}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
