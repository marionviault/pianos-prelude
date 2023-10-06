import React, {useState} from "react";
import Piano from "./../Piano";
import PianosJSON from "./../../pianos.json"
import {PianoProps} from "../../interfaces/piano";
import styles from "../../styles/PianosForSale.module.scss";
import Button from "../Button";

const PianosForSale: React.FC = () => {

    const FIRST_PIANOS: Array<PianoProps> = PianosJSON.pianos.slice(0, 3);
    const MORE_PIANOS: Array<PianoProps> = PianosJSON.pianos.slice(3);

    const [morePianosVisibility, setMorePianosVisibility] = useState(false);

    const handleMorePianosVisibility = () => {
        setMorePianosVisibility((current) => !current);
    };

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

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {FIRST_PIANOS.map((piano: PianoProps, index: React.Key) => {
                        return (
                            <Piano key={index} model={piano.model} photos={piano.photos} alt={piano.alt}
                                   description={piano.description} price={piano.price} brand={piano.brand}
                                   color={piano.color} manufacturing={piano.manufacturing} size={piano.size}
                                   year={piano.year} sold={piano.sold}/>
                        )
                    })}
                </div>

                {MORE_PIANOS && (

                    <>

                        {morePianosVisibility && (

                            <div
                                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {MORE_PIANOS.map((piano: PianoProps, index: React.Key) => {
                                    return (
                                        <Piano key={index} model={piano.model} photos={piano.photos} alt={piano.alt}
                                               description={piano.description} price={piano.price} brand={piano.brand}
                                               color={piano.color} manufacturing={piano.manufacturing} size={piano.size}
                                               year={piano.year} sold={piano.sold}/>
                                    )
                                })}
                            </div>

                        )}

                        <div className="flex justify-center gap-10">
                            <Button classList={`${styles.button} see-more`} onClick={handleMorePianosVisibility}
                                    label={`En voir ${morePianosVisibility ? 'moins' : 'plus'}`}/>
                            <a className={`${styles.button} bg-white text-black button rounded-lg mt-6 py-2 px-4 border`}
                               href="#contact">
                                Me contacter
                            </a>
                        </div>

                    </>

                )}

            </div>
        </section>
    );
};

export default PianosForSale;
