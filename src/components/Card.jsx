import React from "react";

function Card({children}) {
  return <div className="card card-Container" >
    {children}
  </div>;
}

export default Card;
