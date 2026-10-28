import React from "react";

export default function BlogCard({ image, title, description }) {
    return (
        <div className="blog-card">
            <img src={image} alt={title} />

            <div className="content-box">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>Read More</button>
            </div>
        </div>
    );
}