import React from "react";
import Piano, {PianoProps} from "./../Piano";
import useSWR from "swr";

// Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
const PianoCarousel: React.FC = () => {

    const { data, error } = useSWR('/api/staticdata', fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state

    let pianos= [];
    if (!data) {
        return <div>Loading...</div>;
    } else {
        pianos = data.piano;
    }

    return (
        <section id="pianos" className="flex">
            {pianos.map((piano: PianoProps, index: React.Key) => {
                return <Piano key={index} name={piano.name} photo={piano.photo} alt={piano.alt} description={piano.description} price={piano.price}/>
            })}
        </section>
    );
};

export default PianoCarousel;
