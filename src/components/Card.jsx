import React from "react";



export default function Card(props){
  let badgeText;
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return(
      
        <div className="card-container">
          <div className="image-container">
            <img className="card-image" src={`../images/${props.coverImg}`} alt="" />
           {badgeText && <div className="sold-out">{badgeText}</div>}
          </div>
          <div className="text-container">
            <div className="rating">
              <img className="rating-image" src="../public/images/star1.png"/>
              <p>{props.stats.rating} <span className="grey-text">&#40;{props.stats.reviewCount}&#41; &#183; {props.location}</span></p>
            </div>
            <p>{props.title}</p>
            <p className="person"><span className="bold-text">From ${props.price} </span>&#47; person</p>
          
          


          </div>
        </div>
      
  )
}