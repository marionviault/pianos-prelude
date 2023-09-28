import React from "react";
import {PianoProps} from "../interfaces/piano";
import Image from "next/image";
//import Link from 'next/link';

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {
    return (
        <div className="group relative text-white">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                <Image src={piano.photo} alt={piano.alt} width="400" height="400"
                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm">
                        {/*<a href={`/piano/${piano.name}`}>*/}
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {piano.name}
                        {/*</a>*/}
                    </h3>
                    <p className="mt-1 text-sm">{piano.description}</p>
                </div>
                <p className="text-sm font-medium">
                    {piano.price}
                    <span> €</span>
                </p>
            </div>
        </div>
    );
};

export default Piano;
