import React from "react";
import "./Home.css";
import Herobox from "../../Components/Herobox/Herobox";
import Logo from '../../Assets/icon1.png'

export default function Herosec() {
    return(
    
        <section className="hero">
            <div className="Herosec">
                
                <h1>We help your business grow with smart and effective strategies</h1>
                 <p>TechNova is a modern technology platform dedicated to providing innovative and reliable digital 
                    solutions that help businesses grow, improve efficiency, and achieve their goals.</p>
               
                  <button>Explore TechNova</button>
            </div>
            <Herobox
             logoimg2={Logo}
                titleName="Web Development"
                paragraph="We build modern and responsive websites."/>
            <Herobox 
             logoimg2={Logo}
                titleName="Web Development"
                paragraph="We build modern and responsive websites."/> 
            <Herobox
             logoimg2={Logo}
                titleName="Web Development"
                paragraph="We build modern and responsive websites." />
           </section>
          
    )
}