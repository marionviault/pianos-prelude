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
            <div className="mt-4 text-sm">
                <div className="flex justify-between">
                    <h3>
                        {/*<a href={`/piano/${piano.name}`}>*/}
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {`${piano.model} - ${piano.brand}`}
                        {/*</a>*/}
                    </h3>
                    <p className="font-medium">
                        {piano.price}
                        <span> €</span>
                    </p>
                </div>
                <p className="mt-1">
                    {piano.year}
                    {piano.color}
                    {piano.size}
                    {piano.description}
                </p>
            </div>
        </div>
    );
};

export default Piano;
