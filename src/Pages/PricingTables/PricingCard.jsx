import React from "react";

export default function PricingCard({ plan, price, features }) {
    return (
        <div className="MainBox">
            <h3>{plan}</h3>

            <h4>
                {price}
                <br />
                monthly
            </h4>

            {features.map((feature, index) => (
                <h5 key={index}>{feature}</h5>
            ))}

            <button>Click</button>
        </div>
    );
}