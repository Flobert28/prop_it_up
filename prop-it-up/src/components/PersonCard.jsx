import React from "react";

const PersonCard = (props) => {
  return(
    <div>
    <h1>{props.firstName} {props.lastName}</h1>
    <p>Age: {props.age}</p>
    <p>Hair color: {props.hair}</p>
    </div>
  )
  }

export default PersonCard;