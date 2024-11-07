import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.alt} />
      <div>{props.tag}</div>
      <p>{props.published}</p>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div class="avatar-wrapper">
        <img src={props.avatar} alt="Avatar" />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}

export default Card;
