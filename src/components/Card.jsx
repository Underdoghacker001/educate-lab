import React from "react";

const Card = props => {
  return (
    <>
      <div className="bg-slate-100 w-52 p-3 rounded-xl m-1">
        <div>{props.icon}</div>
        <h3 className="text-2xl font-semibold">{props.text}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Card;
