import React from "react";
import "./style.css"

export default function Heading({title, subtitle, cover}) {
  return (
    <div className="heading">
       <h1>{title}</h1>
        <p>{subtitle}</p>
     </div>

  );
}
