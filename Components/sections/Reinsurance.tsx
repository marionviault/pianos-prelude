import React from "react";
import styles from "../../styles/Reinsurance.module.scss";
import { BellAlertIcon } from "@heroicons/react/24/outline";

interface ReinsuranceElementProps {
    name: string,
    description: string,
    icon: any
}

const REINSURANCE_ELEMENTS: Array<ReinsuranceElementProps> = [
    {
        name: 'Expérience et réseau',
        description: 'Fort de 10 ans d’expérience et diplômé d’un Brevet des Métiers des Arts option piano : \n' +
            'j’ai travaillé en magasin, pour les conservatoires, les particuliers ou bien les professionnels. \n' +
            'J’ai également travaillé pour de prestigieuses salles de concerts tel que l’Olympia, le sunset sunside, …\n' +
            'des studios d’enregistrement, Studio Besco, le studio de Meudon ou encore des théâtres ; théâtre de l’athénée, théâtre de la porte saint martin, le Grand Rex… \n' +
            'Un musicien passionné incarne un technicien exigeant : bénéficiez/profitez d’une écoute attentive à vos besoins et d’un travail soigné.',
        icon: BellAlertIcon
    },
    {
        name: 'Un réseau élargi',
        description: 'Transporteurs, studios d’enregistrements, professeurs, salles de concerts, showroom et magasins de pianos, …',
        icon: BellAlertIcon
    },
    {
        name: 'Eco- responsables à notre échelle',
        description: 'Inscrivons-nous dans une démarche écologique en faisant appel à mes services/en travaillant ensemble, en effet je me déplace majoritairement en transport en commun et en edpm lorsque cela m’est possible. Par ailleurs, je remets en état de sublimes pianos d’occasions qui ont encore de nombreuses années de musique à offrir, ce qui participe à limiter (à notre échelle) une éventuelle surproduction/surconsommation d’instruments neufs.',
        icon: BellAlertIcon
    }
]

const Trusted: React.FC = () => {
    return (
        <section className={`${styles.reinsurance} bg-white pt-20 px-6 lg:px-8 sm:py-8`}>
            <span className="anchor" id="pourquoi-me-faire-confiance"></span>

            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-lg font-semibold leading-8">
                    Pourquoi moi
                </h2>

                <div
                    className="mx-auto mt-10 grid max-w-lg gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {REINSURANCE_ELEMENTS.map((element: ReinsuranceElementProps, index: React.Key) => (
                         <div key={index}>
                             <element.icon className="h-6 w-6 text-gray-800" aria-hidden="true"/>
                             <h3 className="text-2xl font-bold leading-9 tracking-tight">{element.name}</h3>
                             <p className="text-base leading-7">{element.description}</p>
                         </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Trusted;
