import React from "react";
import Piano from "./../Piano";

const PianoCarousel: React.FC = () => {

    return (
        <section id="pianos" className="flex">
            <Piano name="Piano droit 1" photo="/pianos/piano-exemple-1.jpg" alt="Photo du piano droit 1" description="Description du piano droit 1" price="350"/>
            <Piano name="Piano droit 2" photo="/pianos/piano-exemple-2.jpg" alt="Photo du piano droit 2" description="Description du piano droit 2" price="50"/>
            <Piano name="Piano droit 3" photo="/pianos/piano-exemple-3.jpg" alt="Photo du piano droit 3" description="Description du piano droit 3" price="100"/>
            <Piano name="Piano droit 4" photo="/pianos/piano-exemple-4.jpg" alt="Photo du piano droit 4" description="Description du piano droit 4" price="200"/>
        </section>
    );
};

export default PianoCarousel;
