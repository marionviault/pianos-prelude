import React from "react";
import {PianoProps} from "../interfaces/piano";
//import Link from 'next/link';
import Image from 'next/image';

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {
    return (
        <div className="flex">

            <div className="basis-2/5">
                <Image src={piano.photo} alt={piano.alt} width="400" height="400"/>
            </div>

            <div className="basis-3/5 text-sm">
                <div className="uppercase">{piano.name}</div>

                <div>{piano.description}</div>

                <div>{piano.price} €</div>

                {/*<Link href={`/piano/${piano.name}`}>Voir plus</Link>*/}
            </div>

        </div>
    );
};

export default Piano;
