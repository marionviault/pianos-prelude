import Link from 'next/link'
import React from "react";
import {Disclosure} from "@headlessui/react";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";

interface SocialMediaProps {
    name: string,
    image: string,
    url: string,
}

const SOCIAL_MEDIAS: Array<SocialMediaProps> = [
    {
        name: 'facebook',
        image: 'facebook-logo.png',
        url: 'https://google.com',
    },
    {
        name: 'instagram',
        image: 'instagram-logo.png',
        url: 'https://facebook.com',
    },
    {
        name: 'twitter',
        image: 'twitter-logo.png',
        url: 'https://wikipedia.com',
    },
]

const Footer: React.FC = () => {


    return (
        <Disclosure as="footer" className={`${styles.footer}`}>
                    <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch">

                                <ul className="flex space-x-4">
                                    {SOCIAL_MEDIAS.map((socialMedia: SocialMediaProps, index: React.Key) => (
                                        <li key={index}>
                                            <Link legacyBehavior href={socialMedia.url}>
                                                <Image src={socialMedia.image} alt={`Logo de ${socialMedia.name}`}
                                                       width='60' height='60'/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </nav>
        </Disclosure>
    );
};

export default Footer;
