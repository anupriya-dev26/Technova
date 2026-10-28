import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialsCard";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            description:
                "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
            name: "Kelvin Wood",
            role: "Digital Marketer"
        },
        {
            id: 2,
            description:
                "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
            name: "Kelvin Wood",
            role: "Digital Marketer"
        },
        {
            id: 3,
            description:
                "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
            name: "Kelvin Wood",
            role: "Digital Marketer"
        }
    ];

    return (
        <div className="Test">
            <h2>What do they say?</h2>

            <p>
                Donec tempus, sem non rutrum imperdiet, lectus orci
                fringilla nulla, at accumsan elit eros a turpis.
                Ut sagittis lectus libero.
            </p>

            <div className="testimonial-container">
                {testimonials.map((item) => (
                    <TestimonialCard
                        key={item.id}
                        description={item.description}
                        name={item.name}
                        role={item.role}
                    />
                ))}
            </div>
        </div>
    );
}
