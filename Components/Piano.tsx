import React from "react";
import Image from "next/image";

interface PianoProps {
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
                <Image src={piano.photo} alt={piano.alt} width="400" height="400"/>
            </div>

            <div className="basis-3/5 text-sm">
                <div className="uppercase">{piano.name}</div>
                <div>{piano.description.substring(0, 130)}...</div>
            </div>

            <div>{piano.price} €</div>

        </div>
    );
};

export default Piano;
