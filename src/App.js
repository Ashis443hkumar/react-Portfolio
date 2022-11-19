import React from "react";
import "./style.css";
import Footer from "./components/common/footer/Footer"
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"

import Home from "./components/pages/home/Home"
import About from "./components/pages/about/About"
import Blog from "./components/pages/blog/Blog"
import Service from "./components/pages/service/Service"

import {BrowserRouter, Routes,Route } from "react-router-dom";


export default function App() {
  return (
    <div>
   <BrowserRouter>
   <Head/>
     <Header/>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/about"about element={<About/>} />
            <Route path="/blog" element={<Blog/>} />

       </Routes>
     <Footer/>
   </BrowserRouter>
  
    </div>
  );
}
