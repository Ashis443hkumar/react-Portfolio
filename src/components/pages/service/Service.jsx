import React from 'react';

import Sdata from './Sdata';
import './service.css';
import Service from "../home/homeService/Service"

export default function Service() {
  return (
    <>

      <div className="heroService">
        {Sdata.map((val) => (
          <div className="hero-box">
            <i class="fa-brands fa-servicestack"></i>
            <h4>{val.name}</h4>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>
      <Service/>
    </>
  );
}
