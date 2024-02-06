import React from "react";

function Card({children}) {
  return <div className="card card-Container" style={{width: "60%"}}>
    {children}
  </div>;
}

export default Card;
