import React from "react";

function Card(props) {
  return (
    <section className="card">
      <img className="background" src={props.src} alt={props.alt} />
      <div className="tag">{props.tag}</div>
      <p className="published">{props.published}</p>
      <button className="title">{props.title}</button>
      <p className="text">{props.text}</p>
      <div className="avatar-wrapper">
        <img className="avatar" src={props.avatar} alt="Avatar" />
        <p className="name">{props.name}</p>
      </div>
    </section>
  );
}

export default Card;
