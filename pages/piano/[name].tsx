import React from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());


const PianoFull = () => {
    const router = useRouter();

    const { data, error } = useSWR('/api/staticdata', fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;

    let pianos = [];
    //Handle the loading state
    if (!data) {
        return <div>Loading...</div>;
    } else {
        pianos = data.piano;
    }

    const {name} = router.query;

    function test(piano) {
        return piano.name === name;
    }

    let piano = pianos.find(test);

    return (
        <article>
            <img src={piano.photo} alt={piano.alt} width="800" height="800"/>
            <div>Nom: {piano.name}</div>
            <div>Description : {piano.description}</div>
            <div>Price {piano.price}</div>
        </article>
    )
}

export default PianoFull;
