import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.scss";

const About: React.FC = () => {
    return (
        <section className={`${styles.about} px-6 pt-20 sm:py-8 lg:px-8 text-black`}>
            <span className="anchor" id="a-propos"></span>

            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-7xl lg:grid-cols-2">

                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Qui je suis
                    </h2>
                    <p className="mt-4">
                        J’ai toujours été amoureux et dédié à la musique depuis mon plus jeune âge et j’y ai consacré
                        la plupart de mon temps au cours de ces vingt dernières années.
                    </p>
                    <p className="mt-4">
                        Grâce à mes parents, j’ai baigné dans un univers riche de rock britannique des années 70 à
                        aujourd’hui : les Pink Floyd, Led Zeppelin, les Beatles, Radiohead... Et c’est très logiquement
                        que j’ai ressenti le besoin d’interpréter ce que j’entendais pour pouvoir en jouir pleinement.
                        <br/>
                    </p>
                    <p className="mt-4">
                        J’ai commencé par le piano très tôt, et ensuite, j’ai voulu me délecter d’autres sonorités
                        tel que la guitare, la batterie, la basse ou encore le chant.
                    </p>
                    <p className="mt-4">
                        Arrivé à l’âge de la maturité, je décide de me lancer dans la réparation et l’entretien de
                        nos merveilleux pianos acoustiques : c’est en 2014 que j’intègre l’ITEMM. Institut technologique
                        européens des métiers de la musique, basé au Mans et j’obtiens avec une grande satisfaction
                        mon BMA/ Brevet des métiers d’arts technicien pianos en 2018.
                        <br/>
                        Je peux dès lors concilier mon travail avec l’amour que j’ai pour la musique.
                    </p>
                    <p className="mt-4">
                        Au cours des années qui ont suivi, j’ai développé un réel amour pour la réparation et l’accord
                        des pianos acoustiques et c’est donc avec joie et diligence que je me tiens prêt à combler vos
                        besoins pianistiques. Puisse ma sensibilité et mon écoute répondre à votre désir de musique
                        dans votre vie.
                        <br/>
                    </p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">

                    <figure className="overflow-hidden flex">
                        <Image src="/robin/repair.jpg"
                               alt="Pphoto de Robin Lefevbre entrain d'accorder un piano"
                               className="object-cover rounded-lg" width={50} height={50}/>
                    </figure>

                    <figure className="overflow-hidden flex">
                        <Image src="/deco/repair.jpg" alt=""
                               className="object-cover rounded-lg" width={50} height={50}/>
                    </figure>

                    <figure className="overflow-hidden flex">
                        <Image src="/deco/workbench.jpg" alt=""
                               className="object-cover rounded-lg" width={50} height={50}/>
                    </figure>

                    <figure className="overflow-hidden flex">
                        <Image src="/robin/concert.jpg"
                               alt="Photo de Romain Lefevbre entrain de reparer un piano dans une salle de concert"
                               className="object-cover rounded-lg" width={50} height={50}/>
                    </figure>

                </div>

            </div>

        </section>
    );
};

export default About;
