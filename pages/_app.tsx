import './../styles/globals.css'
import Navigation from "./../Components/Navigation";
import Head from "next/head";
import Footer from "./../Components/Footer";
import React from "react";
import {AppProps} from "next/app";

function PianoApp({Component, pageProps}: AppProps) {

    return (
        <>

            <Head>
                <title>Pianos Prélude, au service de la musique</title>
                <meta name="description" content="Robin Lefèvre, technicien accordeur de pianos en région parisienne"/>
                <meta name="keywords" content="piano pianos accordeur accordement paris région parisienne musique instrument"/>
                <link rel="icon" href="./piano-icon.png"/>
            </Head>

            <div className="flex justify-center py-8 bg-[#E3E7EC] min-h-screen">
                <div className="">

                    <Navigation/>

                    <main className=" pl-12 pr-12">
                        <Component {...pageProps} />
                    </main>

                    <Footer/>

                </div>
            </div>

        </>
    )
}

export default PianoApp;
