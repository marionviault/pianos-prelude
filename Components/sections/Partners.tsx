import React from "react";
import Image from "next/image";
import styles from "../../styles/Partners.module.scss";

interface PartnerProps {
    name: string,
    url: string,
    logo: string,
    width: number,
    height: number
}

const PARTNERS: Array<PartnerProps> = [
    {
        name: 'Quintessence',
        url: 'https://pianoquintessence.com/',
        logo: '/partner/quintessence.png',
        width: 252,
        height: 48
    },
    {
        name: 'DP Pianos',
        url: 'https://dppianos.fr/',
        logo: '/partner/dp-pianos.svg',
        width: 79,
        height: 48
    },
    {
        name: 'Studios 92',
        url: 'https://www.studiodemeudon.fr/',
        logo: '/partner/studiomeudon.jpg',
        width: 158,
        height: 48
    },
    {
        name: 'HelPianos',
        url: 'https://www.helpianos-transport.com/',
        logo: '/partner/helpianos.png',
        width: 144,
        height: 48
    }
]

const Partners: React.FC = () => {
    return (
        <section id="partenaires-de-confiance" className={`${styles.trusted} bg-white pt-20 px-6 lg:px-8 sm:py-8`}>

            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-lg font-semibold leading-8">
                    Partenaires de confiance
                </h2>

                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {PARTNERS.map((partner: PartnerProps, index: React.Key) => (
                        <a href={partner.url} key={index}>
                            <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                   src={partner.logo} alt={`Logo de ${partner.name}`} width={partner.width}
                                   height={partner.height}/>
                        </a>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Partners;
