import React from "react";
import Image from "next/image";
import styles from "../../styles/Banner.module.scss";
import {bitter} from "../../pages/_app";

const Banner: React.FC = () => {
    return (
        <section className={`${styles.heroHeader} relative isolate overflow-hidden py-20 sm:py-32 text-white`}>
            <span className="anchor" id="hero-banner"></span>

            <Image
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-40"
                src="/deco/banner.jpg" alt="Photo de piano" width={0} height={432}/>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">

                    <h1 className={`${bitter.className} text-4xl text-center font-bold tracking-tight sm:text-6xl`}>
                        PIANOS PRELUDE<br/>au service de votre musique
                    </h1>

                    <p className="mt-6 text-center text-lg leading-8">
                        Robin Lefèvre, technicien accordeur en région parisienne.
                    </p>

                </div>
            </div>

        </section>
    );
};

export default Banner;
