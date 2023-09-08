import Link from "next/link";
import {NextRouter, useRouter} from "next/router";
import styles from "../styles/Navigation.module.scss";
import React from "react";

const Navigation: React.FC = () => {

    const ROUTER: NextRouter = useRouter();

    return (
        <div className="basis-2/12 text-white pl-4">
            <nav className="basis-2/12 text-white pl-4">
                <div className={styles.navigation}>
                    <ul className="grid gap-4">

                        <li className={`${ROUTER.pathname === "/" ? styles.active : ""} p-2`}>
                            <Link href="/">
                                <a>ACCUEIL</a>
                            </Link>
                        </li>

                        <li className={`${ROUTER.pathname === "/about" ? styles.active : ""} p-2`}>
                            <Link href="/about">
                                <a>A PROPOS</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
