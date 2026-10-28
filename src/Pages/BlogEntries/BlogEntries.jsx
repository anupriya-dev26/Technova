import React from "react";
import "./BlogEntries.css";

import Image7 from "../../Assets/image7.jpg";
import Image4 from "../../Assets/image4.webp";
import Image3 from "../../Assets/image3.jpg";
import BlogCard from "./BlogCard";

export default function BlogEntries() {
    const blogs = [
        {
            image: Image7,
            title: "Vivamus ac vehicula dui",
            description:
                "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue."
        },
        {
            image: Image4,
            title: "Vivamus ac vehicula dui",
            description:
                "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue."
        },
        {
            image: Image3,
            title: "Vivamus ac vehicula dui",
            description:
                "Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue."
        }
    ];

    return (
        <div className="Blog">
            <h1>Blog Entries</h1>

            <p>
                Integer molestie aliquam gravida. Nullam nec arcu finibus,
                imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.
            </p>

            <div className="imgpart">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
}

