import React from "react";
import Piano from "./../Piano";

const PianoCarousel: React.FC = () => {

    return (
        <section id="piano-carousel" className="flex">
            <Piano name="piano1" photo="/facebook-logo.png" alt="1er piano" description="Description bla bla" price="350"/>
            <Piano name="piano2" photo="/instagram-logo.png" alt="2eme piano" description="gfdgsdfgsfdgfsdgfsdgsfdgsfdgsd" price="50"/>
            <Piano name="piano3" photo="/instagram-logo.png" alt="3eme piano" description="3eme piano descriptif" price="100"/>
            <Piano name="piano4" photo="/twitter-logo.png" alt="4eme piano" description="" price="200"/>
        </section>
    );
};

export default PianoCarousel;
