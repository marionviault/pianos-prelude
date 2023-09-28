import React from "react";
import Piano from "./../Piano";
import PianosJSON from "./../../pianos.json"
import {PianoProps} from "../../interfaces/piano";
import styles from "../../styles/PianosForSale.module.scss";

const PianosForSale: React.FC = () => {

    const PIANOS: Array<PianoProps> = PianosJSON.pianos;

    return (
        <section id="pianos-en-vente" className={`${styles.pianos}`}>

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Mes pianos disponibles à la vente
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {PIANOS.map((piano: PianoProps, index: React.Key) => {
                        return (
                            <Piano key={index}
                                   name={piano.name}
                                   photo={piano.photo}
                                   alt={piano.alt}
                                   description={piano.description}
                                   price={piano.price}/>
                        )
                    })}
                </div>
            </div>

        </section>
    );
};

export default PianosForSale;
