import React from "react";
import Piano from "./Piano";

const PianoCarousel: React.FC = () => {

    return (
        <section id="piano-carousel" className="flex">
            <Piano name="piano1" image="" description="Description bla bla"/>
            <Piano name="piano2" image="" description=""/>
            <Piano name="piano3" image="" description="3eme piano descriptif"/>
            <Piano name="piano4" image="" description=""/>
        </section>
    );
};

export default PianoCarousel;
