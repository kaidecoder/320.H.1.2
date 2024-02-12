import React from "react";

const Main = (props) => {
  return (
    <div className="main">
      <h3>{props.date}</h3>
      <h2>{props.description}</h2>
      <img src={props.src} alt="" />
      <p className="article">{props.article}</p>
    </div>
  );
};

export default Main;
