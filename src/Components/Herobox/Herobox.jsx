import React from "react";
import './Herobox.css';
import logoimg2 from '../../Assets/icon1.png'


 export default function Herobox(props) {
    return (
         <div className="herobox">
                    <div className="logoimg2">
                        <img src={logoimg2} alt="logo" />
                    </div>
                    <h3>{props.titleName}</h3>
                    <p>{props.paragraph}</p>
        </div>
    )
}