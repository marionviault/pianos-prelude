import {useEffect, useState} from "react";
import {router} from "next/client";

const PianoFull = () => {

    const [piano, setPiano] = useState('');

    useEffect(() => {
        const getPiano = async () => {
            const {name} = router.query;

            // @ts-ignore
            setPiano(name);
        };
        getPiano();
    }, []);

    return (
        <article>
            Nom: {piano}
        </article>
    )
}

export default PianoFull;
