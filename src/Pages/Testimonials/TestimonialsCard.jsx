import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

export default function TestimonialCard({ description, name, role }) {
    return (
        <div className="box1">
            <div className="logimg1">
                <div className="process-item1">
                    <LuMessageCircleMore />

                    <p>{description}</p>
                    <h4>{name}</h4>
                    <h2>{role}</h2>
                </div>
            </div>
        </div>
    );
}