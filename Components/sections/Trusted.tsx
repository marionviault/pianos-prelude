import React from "react";
import Image from "next/image";
import styles from "../../styles/Trusted.module.scss";

interface PartnerProps {
    name: string,
    logo: string,
    width: number,
    height: number
}

const PARTNERS: Array<PartnerProps> = [
    {
        name: 'Transistor',
        logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
        width: 158,
        height: 48
    },
    {
        name: 'Reform',
        logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
        width: 158,
        height: 48
    },
    {
        name: 'Tuple',
        logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
        width: 158,
        height: 48
    },
    {
        name: 'SavvyCal',
        logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
        width: 158,
        height: 48
    },
    {
        name: 'Statamic',
        logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
        width: 158,
        height: 48
    }
]

const Trusted: React.FC = () => {
    return (
        <section id="partenaires-de-confiance" className={`${styles.trusted} bg-white pt-20 px-6 lg:px-8 sm:py-8`}>

            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-lg font-semibold leading-8">
                    Partenaires de confiance
                </h2>

                <div
                    className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {PARTNERS.map((partner: PartnerProps) => (
                        <Image key={partner.name} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                               src={partner.logo} alt={partner.name} width={partner.width} height={partner.height}/>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Trusted;
