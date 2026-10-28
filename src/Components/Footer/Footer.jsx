import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

import { IoLogoLinkedin } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return(
        <footer>
            <div className="Footericons">
                <ul>
                    <li><a href="#"><FaWhatsapp /></a></li>
                    <li><a href="#"><FaWifi /></a></li>
                    <li><a href="#"><CiTwitter /></a></li>
                    <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><IoLogoLinkedin  /></a></li>
                    
                </ul>
                <div className="lines"></div>
                <p>Copyright © 2026 Technova - Design: Anupriya</p>
                
            
            </div>
        </footer>
    )
}