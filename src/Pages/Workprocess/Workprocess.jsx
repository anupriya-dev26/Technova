import React from "react";
import "./Workprocess.css";
import ProcessCard from "./ProcessCard";

export default function Workprocess() {
    const processData = [
        {
            id: 1,
            title: "Get Ideas",
            description: "Aenean nec tempor metus"
        },
        {
            id: 2,
            title: "Get Ideas",
            description: "Aenean nec tempor metus"
        },
        {
            id: 3,
            title: "Get Ideas",
            description: "Aenean nec tempor metus"
        },
        {
            id: 4,
            title: "Get Ideas",
            description: "Aenean nec tempor metus"
        }
    ];

    return (
        <section className="Process">
            <h3>Workprocess</h3>

            <p>
                Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                imperdiet interdum, vehicula ut ex. Donec ante diam.
            </p>

            <div className="box">
                <div className="logimg">
                    {processData.map((item) => (
                        <ProcessCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}













