import React from "react";
import {useRouter} from "next/router";

const PianoFull = () => {
    const router = useRouter();

    const {name} = router.query;

    return (
        <article>
            {name}
            {/*            <img src={piano.photo} alt={piano.alt} width="800" height="800"/>
            <div>Nom: {piano.name}</div>
            <div>Description : {piano.description}</div>
            <div>Price {piano.price}</div>*/}
        </article>
    )
}

export default PianoFull;
