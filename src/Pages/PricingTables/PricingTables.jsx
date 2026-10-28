
import React from "react";
import "./PricingTables.css";
import PricingCard from "./PricingCard";

export default function PricingTables() {
    const pricingPlans = [
        {
            id: 1,
            plan: "Starter",
            price: "$14.50",
            features: [
                "120 GB space",
                "1200 GB transfer",
                "Pro Design Panel",
                "15-minute support",
                "Unlimited Emails",
                "24/7 Security"
            ]
        },
        {
            id: 2,
            plan: "Starter",
            price: "$14.50",
            features: [
                "120 GB space",
                "1200 GB transfer",
                "Pro Design Panel",
                "15-minute support",
                "Unlimited Emails",
                "24/7 Security"
            ]
        },
        {
            id: 3,
            plan: "Starter",
            price: "$14.50",
            features: [
                "120 GB space",
                "1200 GB transfer",
                "Pro Design Panel",
                "15-minute support",
                "Unlimited Emails",
                "24/7 Security"
            ]
        }
    ];

    return (
        <div className="Table">
            <h1>Pricing Plans</h1>

            <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat
                magna quis arcu elementum, quis congue risus volutpat.
            </p>

            <div className="pricing-container">
                {pricingPlans.map((item) => (
                    <PricingCard
                        key={item.id}
                        plan={item.plan}
                        price={item.price}
                        features={item.features}
                    />
                ))}
            </div>
        </div>
    );
}