import React from "react";
import Herosec from "./Herosec";
import Homeabout from  './Homeabout'
import Project from "./Project";
import Workprocess from "../Workprocess/Workprocess";
import '../../Assets/logo1.png'
import Testimonials from "../Testimonials/Testimonials";
import PricingTables from "../PricingTables/PricingTables";
import BlogEntries from "../BlogEntries/BlogEntries";
import Header from "../../Components/Header/Header";

export default function Home() {
    return(
        <>
         <Herosec />
        <Project />
         <Workprocess />
         <Testimonials/>
         <PricingTables />
         <BlogEntries />
        </>
    )
}