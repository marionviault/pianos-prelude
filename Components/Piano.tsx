import React from "react";
import { PianoProps } from "../interfaces/piano";
import Image from "next/image";
//import Link from 'next/link';

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {
    return (
        <div className="group relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={piano.photo} alt={piano.alt} width="400" height="400"
                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        {/*<a href={`/piano/${piano.name}`}>*/}
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {piano.name}
                        {/*</a>*/}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{piano.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{piano.price}</p>
            </div>
        </div>
    );
};

export default Piano;
