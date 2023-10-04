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
                    <p className="mt-1">
                        Marque : {piano.brand}
                    </p>
                    <p className="font-medium">
                        {piano.price}
                        <span> €</span>
                    </p>
                </div>
                {piano.model && (
                    <p className="mt-1">
                        Modèle : {piano.model}
                    </p>
                )}
                {piano.year && (
                    <p className="mt-1">
                        Année : {piano.year}
                    </p>
                )}
                {piano.color && (
                    <p className="mt-1">
                        Finition : {piano.color}
                    </p>
                )}
                {piano.size && (
                    <p className="mt-1">
                        Dimensions : {piano.size}
                    </p>
                )}
                {piano.description && (
                    <p className="mt-1">
                        Description : {piano.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Piano;
