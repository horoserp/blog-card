import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="background" src={props.src} alt={props.alt} />
      <div className="tag">{props.tag}</div>
      <p className="published">{props.published}</p>
      <button className="title">{props.title}</button>
      <p className="text">{props.text}</p>
      <div className="avatar-wrapper">
        <img className="avatar" src={props.avatar} alt="Avatar" />
        <h3 className="name">{props.name}</h3>
      </div>
    </div>
  );
}

export default Card;
