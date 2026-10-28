import React from "react";
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Testimonials/Testimonials"
import PricingTables from "./Pages/PricingTables/PricingTables";
import BlogEntries from "./Pages/BlogEntries/BlogEntries";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Workprocess from "./Pages/Workprocess/Workprocess";
import Footer from "./Components/Footer/Footer";
 import {Routes, Route} from 'react-router-dom';
import Form from "./Pages/Form/Form";
import Project from "./Pages/Home/Project";

export default function App() {
  return(
    <>
       <Header />  
      
    
    <Routes>
       
      
       <Route  path='/' element= {<Home />}/>
       <Route  path='/about' element= {<About />}/>
      <Route  path='/workprocess' element= { <Workprocess/>}/>
      
      <Route  path='/pricingtables' element= {<PricingTables />}/>
      <Route  path='/testimonials' element= {<Testimonials />}/>

       <Route  path='/blogentries' element= { <BlogEntries />}/>
        <Route  path='/contactus' element= { <ContactUs />}/>
    </Routes>
       <Form />
     
      <Footer />
     
    </>
  
    
 
  )
}
