import React from "react";
import Piano from "./../Piano";
import PianosJSON from "./../../pianos.json"
import {PianoProps} from "../../interfaces/piano";
import styles from "../../styles/PianosForSale.module.scss";

const PianosForSale: React.FC = () => {

    const PIANOS: Array<PianoProps> = PianosJSON.pianos;

    return (
        <section className={`${styles.pianos} px-6 pt-20 sm:py-8 lg:px-8 text-white`}>
            <span className="anchor" id="pianos-en-vente"></span>

            <div className="mx-auto max-w-2xl lg:max-w-7xl lg:grid-cols-2">

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl pb-2">
                    Mes pianos disponibles à la vente
                </h2>

                <div>
                    Bénéficiez d’une remise en état complète et d’une préparation exhaustive sur d’excellents pianos
                    d’occasions choisis par mes soins et d’un rapport qualité-prix imbattable.
                    Mes années en entreprise m’ont permis de savoir quels pianos sont les plus pertinents à vous
                    proposer sur le plan mécanique, acoustique, et aussi économique pour combler vos projets.
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {PIANOS.map((piano: PianoProps, index: React.Key) => {
                        return (
                            <Piano key={index} model={piano.model} photo={piano.photo} alt={piano.alt}
                                   description={piano.description} price={piano.price} brand={piano.brand}
                                   color={piano.color} manufacturing={piano.manufacturing} size={piano.size}
                                   year={piano.year}/>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};

export default PianosForSale;
