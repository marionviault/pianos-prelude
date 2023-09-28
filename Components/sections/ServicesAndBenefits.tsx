import React from "react";
import {
    BellAlertIcon,
    CogIcon,
    MusicalNoteIcon,
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
        description:
            'L’accord est indispensable à l’entretien de votre piano et pour le confort de vos oreilles, il est conseillé de le faire chaque année.\n' +
            'Cette étape peut prendre 1h30 en moyenne et consiste à remettre les cordes du piano juste par rapport à un diapason donné.',
        icon: BellAlertIcon,
    },
    {
        name: 'Réglage',
        description:
            'Pour répondre à toutes vos exigences, le réglage du piano consiste à parfaire et synchroniser le toucher de votre instrument avec le son qui émane de celui-ci.',
        icon: CogIcon,
    },
    {
        name: 'Harmonisation',
        description:
            'L’harmonisation est la touche finale pour sublimer la sonorité de votre piano. Cette opération consiste à travailler le timbre de l’instrument en fonction de ses besoins.',
        icon: MusicalNoteIcon,
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
        description:
            'Trouvez ici votre futur piano\n' +
            'Vous avez un piano et souhaitez le revendre ?',
        icon: ShoppingCartIcon,
    },
]

const ServicesAndBenefits: React.FC = () => {
    return (
        <section id="services-et-prestations" className={`${styles.service}`}>

            <div className="bg-white py-2 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {/*<p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>*/}
                        <h2 id="title" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                                        <div
                                            className={`${styles.icon} absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg`}>
                                            <service.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        {service.name}
                                    </h3>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{service.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServicesAndBenefits;
