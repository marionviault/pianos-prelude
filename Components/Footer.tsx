import Link from 'next/link'
import React from "react";
import styles from "../styles/Navigation.module.scss";
import { Disclosure } from "@headlessui/react";

const Footer: React.FC = () => {

    return (
        <Disclosure as="footer" className="bg-gray-800">
            {({ open }) => (
                <>
                    <nav className={`${styles.navigation} mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="flex flex-1 items-center justify-center sm:items-stretch">

                                <div className="flex space-x-4">
                                    <div>
                                        <Link legacyBehavior href="#">
                                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Lien footer 1
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link legacyBehavior href="#">
                                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Lien footer 2
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link legacyBehavior href="#">
                                            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                Lien footer 3
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </nav>
                </>
            )}
        </Disclosure>


    );
};

export default Footer;
