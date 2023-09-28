import './../styles/globals.scss'
import Navigation from "./../Components/Navigation";
import Head from "next/head";
import Footer from "./../Components/Footer";
import React from "react";
import {AppProps} from "next/app";
import {Bitter} from '@next/font/google';
import {NextFont} from "@next/font";

export const bitter: NextFont = Bitter({
    subsets: ['latin'],
    weight: ['500', '700'],
});

function PianoApp({Component, pageProps}: AppProps) {

    return (
        <>

            <Head>
                <title>Pianos Prélude, au service de la musique</title>
                <meta name="description" content="Robin Lefèvre, technicien accordeur de pianos en région parisienne"/>
                <meta name="keywords" content="piano pianos accordeur accordement paris région parisienne musique instrument"/>
                <link rel="icon" href="/piano-icon.png"/>
            </Head>

            <div className="bg-[#E3E7EC] min-h-screen">

                    <main>
                        <Navigation/>
                        <Component {...pageProps} />
                    </main>

                    <Footer/>

            </div>

        </>
    )
}

export default PianoApp;
