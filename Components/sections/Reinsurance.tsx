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
        name: 'Une formation pour une base solide',
        description: 'Diplômé d’un Brevet des Métiers des Arts option piano.',
        icon: BellAlertIcon
    },
    {
        name: '10 ans d\'expérience',
        description: 'J’ai travaillé en magasin, pour des conservatoires, des professionnels, de prestigieuses salles de concerts, des studios d’enregistrement ou encore des théâtres.',
        icon: BellAlertIcon
    },
    {
        name: 'Un musicien avant tout',
        description: 'Un musicien passionné incarne un technicien exigeant : Profitez d’une écoute attentive à vos besoins et d’un travail soigné.',
        icon: BellAlertIcon
    },
    {
        name: 'Un réseau élargi',
        description: 'Transporteurs, studios d’enregistrements, professeurs, salles de concerts, showroom et magasins de pianos.',
        icon: BellAlertIcon
    },
    {
        name: 'Eco- responsables à notre échelle',
        description: 'Je me déplace majoritairement en transport en commun et en edpm lorsque cela m’est possible. Par ailleurs, je remets en état de sublimes pianos d’occasions qui ont encore de nombreuses années de musique à offrir.',
        icon: BellAlertIcon
    }
]

const Trusted: React.FC = () => {
    return (
        <section id="pourquoi-me-faire-confiance" className={`${styles.reinsurance} bg-white pt-20 px-6 lg:px-8 sm:py-8`}>

            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-lg font-semibold leading-8">
                    Pourquoi moi
                </h2>

                <div
                    className="mx-auto mt-10 grid max-w-lg gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {REINSURANCE_ELEMENTS.map((element: ReinsuranceElementProps) => (
                         <div key={element.name}>
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
