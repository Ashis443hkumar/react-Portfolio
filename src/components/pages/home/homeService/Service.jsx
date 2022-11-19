import React from "react";
import "./style.css"
import Sdata from "./Sdata"
import Heading from "../../../common/heading/Heading";

export default function Service() {
  return (

    <div id="service">
            {/* <h5>What we can do for you</h5> */}
        <Heading title="Services provide for you." subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />
        <div className="service">
            {
              Sdata.map((val) =>(
                <div className="serviceBox">
                  {/* <img src={val.cover} alt="df" /> */}            
                  <i class="fa-solid fa-house"></i>
                  <img src="" alt=""/>
                  <h2>{val.name}</h2>
                  <p>{val.desc}</p>
                </div>
              ))
            }
      </div>
    </div> 
   

    
  );
}