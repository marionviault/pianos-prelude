import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import styles from "../styles/Navigation.module.scss";
import React from "react";
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Image from "next/image";
import {bitter} from "../pages/_app";

interface ItemProps {
    name: string,
    href: string,
    current: boolean,
}

const NAVIGATION: Array<ItemProps> = [
    {name: 'À propos', href: '/#a-propos', current: false},
    {name: 'Services et prestations', href: '/#services-et-prestations', current: false},
    {name: 'Pianos en vente', href: '/#pianos-en-vente', current: false},
    {name: 'Témoignages', href: '/#temoignages', current: false},
    {name: 'Contact', href: '/#contact', current: false},
]

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Navigation(): JSX.Element {

    const ROUTER: NextRouter = useRouter();

    return (
        <Disclosure as="header" className={`${styles.navigation} flex sticky top-0 z-10`}>
            {({open}) => (
                <>
                    <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5"/>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                                </Disclosure.Button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                <Link href="/#hero-banner">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Image className="h-8 w-auto"
                                               src="/piano-icon.png" alt="Logo représentant des touches de piano"
                                               width={50} height={50}/>
                                        <p className={`${bitter.className} pl-3 text-sm font-medium`}>Pianos Prélude</p>
                                    </div>
                                </Link>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {NAVIGATION.map((item: ItemProps) => (
                                            <div key={item.name}
                                                 className={ROUTER.pathname === item.href ? styles.active : ""}>
                                                <Link legacyBehavior href={item.href}>
                                                    <a className='rounded-md px-3 py-2 text-sm font-medium'
                                                       aria-current={item.current ? 'page' : undefined}>
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </nav>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {NAVIGATION.map((item: ItemProps) => (
                                <Disclosure.Button key={item.name} as="a" href={item.href}
                                                   className={classNames(
                                                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                       'block rounded-md px-3 py-2 text-base font-medium'
                                                   )}
                                                   aria-current={item.current ? 'page' : undefined}>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    );
};
