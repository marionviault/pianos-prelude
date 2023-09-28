import React from "react";
import Image from "next/image";
import {bitter} from "../../pages/_app";
import styles from "../../styles/About.module.scss";

const About: React.FC = () => {
    return (
        <section id="a-propos"
                 className={`${styles.about} bg-white px-4 pt-20 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8`}>

            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16">

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Qui je suis
                    </h2>
                    <p className="mt-4 text-gray-500">
                        J’ai toujours été amoureux et dédié à la musique depuis mon plus jeune âge et j’y ai consacré
                        la plupart de mon temps au cours de ces vingt dernières années.
                    </p>
                    <p className="mt-4 text-gray-500">
                        Grâce à mes parents, j’ai baigné dans un univers riche de rock britannique des années 70 à
                        aujourd’hui : les Pink Floyd, Led Zeppelin, les Beatles, Radiohead... Et c’est très logiquement
                        que j’ai ressenti le besoin d’interpréter ce que j’entendais pour pouvoir en jouir pleinement.
                        <br/>
                    </p>
                    <p className="mt-4 text-gray-500">
                        J’ai commencé par le piano très tôt, et ensuite, j’ai voulu me délecter d’autres sonorités
                        tel que la guitare, la batterie, la basse ou encore le chant.
                    </p>
                    <p className="mt-4 text-gray-500">
                        Arrivé à l’âge de la maturité, je décide de me lancer dans la réparation et l’entretien de
                        nos merveilleux pianos acoustiques : c’est en 2014 que j’intègre l’ITEMM. Institut technologique
                        européens des métiers de la musique, basé au Mans et j’obtiens avec une grande satisfaction
                        mon BMA/ Brevet des métiers d’arts technicien pianos en 2018.
                        <br/>
                        Je peux dès lors concilier mon travail avec l’amour que j’ai pour la musique.
                    </p>
                    <p className="mt-4 text-gray-500">
                        Au cours des années qui ont suivi, j’ai développé un réel amour pour la réparation et l’accord
                        des pianos acoustiques et c’est donc avec joie et diligence que je me tiens prêt à combler vos
                        besoins pianistiques. Puisse ma sensibilité et mon écoute répondre à votre désir de musique
                        dans votre vie.
                        <br/>
                    </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <Image src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                           alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                           className="rounded-lg bg-gray-100" width="280" height="280"/>
                    <Image src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                           alt="Top down view of walnut card tray with embedded magnets and card groove."
                           className="rounded-lg bg-gray-100" width="280" height="280"/>
                    <Image src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                           alt="Side of walnut card tray with card groove and recessed card area."
                           className="rounded-lg bg-gray-100" width="280" height="280"/>
                    <Image src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                           alt="Walnut card tray filled with cards and card angled in dedicated groove."
                           className="rounded-lg bg-gray-100" width="280" height="280"/>
                </div>

            </div>

        </section>
    );
};

export default About;
