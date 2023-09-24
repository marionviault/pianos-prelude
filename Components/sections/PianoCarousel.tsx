import React from "react";
import Piano, {PianoProps} from "./../Piano";
import PianosJSON from "./../../pianos.json"

const PianoCarousel: React.FC = () => {

    let pianos: Array<PianoProps> = PianosJSON.pianos;

    return (
        <section id="pianos" className="flex">
            {pianos.map((piano: PianoProps, index: React.Key) => {
                return <Piano key={index} name={piano.name} photo={piano.photo} alt={piano.alt}
                              description={piano.description} price={piano.price}/>
            })}
        </section>
    );
};

export default PianoCarousel;
