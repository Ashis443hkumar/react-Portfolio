import React from "react";
import "./hero.css";
import Carousel from 'react-material-ui-carousel'

export default function Hero() {

  const data =[
    {
      id:"1",
      cover:"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
     
      title:"Hello StackBlitz! h1.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"2",
      cover:"https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Hello StackBlitz! h2.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"3",
      cover: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Hello StackBlitz! h3.... ",
      desc:"Start editing to see some magic happen :)"
    },
  
  ]
  return (
    <>
     
     <Carousel className="carousel"
        indicators={false}
        animation="slide"
        duration="500"
        navButtonsAlwaysVisible={true}
        
     >
            {
               data.map((val) =>(
                 <div className="box">
                   <div className="boximg">
                      <img src={val.cover} alt="ghg"  />
                   <div className="boxtext">
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                    </div>
                   </div>
                 
                 </div>
               ))
            }
        </Carousel>
      
    </>
  );
}
