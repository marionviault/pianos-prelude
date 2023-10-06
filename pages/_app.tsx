import './../styles/globals.scss'
import Navigation from "./../Components/Navigation";
import Head from "next/head";
import Footer from "./../Components/Footer";
import React from "react";
import {AppProps} from "next/app";
import {Bitter} from "next/font/google";
// @ts-ignore
import {NextFont} from "next/font";

export const bitter: NextFont = Bitter({
    subsets: ['latin'],
    weight: ['500', '700'],
});

function PianoApp({Component, pageProps}: AppProps) {

    return (
        <>

            <Head>
                <title>Pianos Prélude, au service de votre musique</title>
                <meta name="description" content="Robin Lefèvre, technicien accordeur en région parisienne"/>
                <meta name="keywords"
                      content="piano pianos accordeur accordement paris région parisienne musique instrument"/>
                <link rel="icon" href="/favicon.png"/>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            <div className="min-h-screen">

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
