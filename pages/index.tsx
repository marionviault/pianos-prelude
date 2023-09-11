import ContactForm from "../Components/sections/ContactForm";
import React from "react";
import PianoCarousel from "../Components/sections/PianoCarousel";
import About from "../Components/sections/About";
import Services from "../Components/sections/Services";

const Home: React.FC = () => {

    return (
        <>
            <h1>{"Page d'accueil"}</h1>
            <br/>
            <Services/>
            <br/>
            <ContactForm/>
            <br/>
            <PianoCarousel/>
            <br/>
            <About/>
        </>
    )
};

export default Home;
