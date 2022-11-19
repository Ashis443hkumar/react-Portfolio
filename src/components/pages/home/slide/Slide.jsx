import React from 'react';
import './slide.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function App() {
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
    {
      id:"4",
      cover:"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400",
     
      title:"Hello StackBlitz! h1.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"5",
      cover:"https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Hello StackBlitz! h2.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"6",
      cover: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Hello StackBlitz! h3.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"7",
      cover:"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=400",
     
      title:"Hello StackBlitz! h1.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"8",
      cover:"https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Hello StackBlitz! h2.... ",
      desc:"Start editing to see some magic happen :)"
    },
    {
      id:"9",
      cover: "https://images.pexels.com/photos/905554/pexels-photo-905554.jpeg?auto=compress&cs=tinysrgb&w=400",
      title:"Hello StackBlitz! h3.... ",
      desc:"Start editing to see some magic happen :)"
    },
  
  ]
  
  return (
    <>
      <Carousel responsive={responsive} 
            swipeable={false}
            draggable={false}
            autoPlay={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
      
      >
        {
          data.map((val) =>{
            return(
              <>
              <div className="slider">
                  <img src={val.cover} alt="" />
               <div className="carousel-text">
                   <h3>{val.title}</h3>
                   <p>{val.desc}</p>
               </div>
              </div>
              </>
            )
          })
        }
  
      </Carousel>
      ;
    </>
  );
}
