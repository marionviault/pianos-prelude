import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const PianoFull = () => {

    const [piano, setPiano] = useState('');

    const router = useRouter();

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
