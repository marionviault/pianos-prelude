import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import styles from "../styles/Navigation.module.scss";
import React from "react";
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Image from "next/image";
import {navItem} from "../interfaces/navigation";
import {bitter} from "../pages/_app";

const NAVIGATION: navItem[] = [
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
        <Disclosure as="header" className={`${styles.navigation} sticky top-0 z-10`}>
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

                                <div className="flex flex-shrink-0 items-center">
                                    <Image className="h-8 w-auto"
                                           src="/piano-icon.png" alt="Logo représentant des touches de piano"
                                           width="50" height="50"/>
                                    <p className={`${bitter.className} pl-3 text-sm font-medium`}>Pianos Prélude</p>
                                </div>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {NAVIGATION.map((navItem: navItem) => (
                                            <div key={navItem.name}
                                                 className={ROUTER.pathname === navItem.href ? styles.active : ""}>
                                                <Link legacyBehavior href={navItem.href}>
                                                    <a className='rounded-md px-3 py-2 text-sm font-medium'
                                                       aria-current={navItem.current ? 'page' : undefined}>
                                                        {navItem.name}
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
                            {NAVIGATION.map((navItem: navItem) => (
                                <Disclosure.Button key={navItem.name} as="a" href={navItem.href}
                                                   className={classNames(
                                                       navItem.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                       'block rounded-md px-3 py-2 text-base font-medium'
                                                   )}
                                                   aria-current={navItem.current ? 'page' : undefined}>
                                    {navItem.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>
    );
};
