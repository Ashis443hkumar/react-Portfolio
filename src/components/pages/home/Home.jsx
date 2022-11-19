import React from "react";
import Filter from "./filter/Filter";
import Hero from "./hero/Hero";
import Slide from "./slide/Slide"
import Service from "./homeService/Service";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Service/>
        <Filter/>
        <Slide/>

    </div>
  );
}
