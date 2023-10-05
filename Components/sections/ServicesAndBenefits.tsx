import React from "react";
import {
    MusicalNoteIcon,
    CogIcon,
    SparklesIcon,
    ShoppingCartIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import styles from "../../styles/ServicesAndBenefits.module.scss";

interface ServiceProps {
    name: string,
    description: string,
    icon: any
}

const SERVICES: Array<ServiceProps> = [
    {
        name: 'Accord',
        description: 'L’accord est indispensable au bon entretien de votre piano ainsi que pour le confort de vos oreilles. Il est recommandé de le faire chaque année. Cette étape prend en moyenne 1h30 et consiste à remettre les cordes du piano juste par rapport à un diapason donné.',
        icon: MusicalNoteIcon,
    },
    {
        name: 'Réglage',
        description: 'Pour répondre à toutes vos exigences pianistiques, un bon réglage permettra d’optimiser votre instrument ou de palier des problèmes de fonctionnement du clavier, de la mécanique... (réglage du niveau de clavier, de l’enfoncement des touches, de l’échappement des marteaux, etc ...)\n' +
            'En résulte un clavier plus fluide et une meilleure synchronisation entre le toucher de votre instrument et le son qui émane de celui-ci.',
        icon: CogIcon,
    },
    {
        name: 'Harmonisation',
        description:
            'Pour sublimer le son de votre piano et parfaire le timbre de votre instrument ( timbre = identité sonore) en fonction de ses besoins ou de vos désirs : son trop métallique ou trop sourd, ...',
        icon: SparklesIcon,
    },
    {
        name: 'Expertise et réparation',
        description:
            'Quelle est la santé de votre piano et combien vaut-il ? Peut-on le remettre en état et est-ce pertinent ? Quelles réparations sont nécessaires à son bon fonctionnement ?\n' +
            'Obtenez un diagnostic précis et détaillé de votre instrument pour vous aider à savoir quoi en faire.',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Achat et revente',
        description: 'Trouver votre piano idéal.\n' +
            'Ou bien vous avez un instrument et souhaitez le revendre ?',
        icon: ShoppingCartIcon,
    },
]

const ServicesAndBenefits: React.FC = () => {
    return (
        <section className={`${styles.service} px-6 pt-20 sm:py-8 lg:px-8 text-black`}>
            <span className="anchor" id="services-et-prestations"></span>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    {/*<p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>*/}
                    <h2 id="title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Services & prestations
                    </h2>
                    {/*<p className="mt-6 text-lg leading-8 text-gray-600">*/}
                    {/*    Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum*/}
                    {/*    pulvinar et feugiat blandit at. In mi viverra elit nunc.*/}
                    {/*</p>*/}
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {SERVICES.map((service: ServiceProps) => (
                            <div key={service.name} className="relative pl-16">
                                <h3 className="text-base font-semibold leading-7">
                                    <div
                                        className={`${styles.icon} absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg`}>
                                        <service.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                    {service.name}
                                </h3>
                                <dd className="mt-2 text-base leading-7">{service.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </section>
    );
};

export default ServicesAndBenefits;
