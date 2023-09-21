import React from "react";
import Link from 'next/link';

export interface PianoProps {
    name: string;
    photo: string;
    alt: string;
    description: string;
    price: string;
}

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {
    return (
        <div className="flex">

            <div className="basis-2/5">
                <img src={piano.photo} alt={piano.alt} width="400" height="400"/>
            </div>

            <div className="basis-3/5 text-sm">
                <div className="uppercase">{piano.name}</div>

                <div>{piano.description.substring(0, 130)}...</div>

                <div>{piano.price} €</div>

                <Link href={`/piano/${piano.name}`}>Voir plus</Link>
            </div>

        </div>
    );
};

export default Piano;
