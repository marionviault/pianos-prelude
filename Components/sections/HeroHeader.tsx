import React from "react";
import Image from "next/image";

const HeroHeader: React.FC = () => {
    return (
        <section className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-32">

            <Image src="https://images.pexels.com/photos/6073196/pexels-photo-6073196.jpeg"
                   className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                   alt="Photo de piano" width="2000" height="1000"/>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">

                    <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">
                        PIANOS PRELUDE<br/>au service de la musique
                    </h1>

                    <p className="mt-6 text-center text-lg leading-8 text-gray-300">
                        Robin Lefèvre, technicien accordeur de pianos en région parisienne.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default HeroHeader;
