import ContactForm from "../Components/ContactForm";
import React from "react";
import PianoCarousel from "../Components/PianoCarousel";

const Home: React.FC = () => {

    return (
        <div className="">

            <PianoCarousel/>

            <ContactForm/>

        </div>
    )
};

export default Home;
