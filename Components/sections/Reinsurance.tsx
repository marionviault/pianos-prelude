import React from "react";
import Image from "next/image";
import styles from "../../styles/Reinsurance.module.scss";

const Reinsurance: React.FC = () => {
    return (
        <section id="pourquoi-me-faire-confiance"
                 className={`${styles.reinsurance} bg-white px-6 pt-20 sm:py-8 lg:px-8`}>

            <div >

                <h2 className="mx-auto max-w-2xl lg:text-center text-center text-lg font-semibold leading-8">
                    Pourquoi moi
                </h2>

                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 sm:flex sm:items-start">
                        <div
                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <Image className="h-8 w-auto" width="50" height="50"
                                   src="/piano-icon.png" alt="Logo représentant des touches de piano"/>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <p className="mt-2 text-sm">
                                Fort de 10 ans d’expérience ou j’ai travaillé pour les entreprises,
                                institutions, Conservatoires, théâtres, concerts, particuliers et pianistes
                                professionnels.
                                Titulaire d’un Brevet de Métier d’Art.
                            </p>
                        </div>
                    </div>

                    <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div
                                className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                <Image className="h-8 w-auto" src="/piano-icon.png"
                                       alt="Logo représentant des touches de piano" width="50" height="50"/>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <div className="mt-2">
                                    <p className="text-sm">
                                        Un musicien passionné et un technicien exigeant : bénéficiez d’une écoute
                                        attentive à vos besoins et d’un travail soigné.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Reinsurance;
