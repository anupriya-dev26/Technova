import React from "react";
import { BsRocketTakeoffFill } from "react-icons/bs";

export default function ProcessCard({ title, description }) {
    return (
        <div className="process-item">
            <BsRocketTakeoffFill />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}