import React from "react";
import HeroHeader from "../Components/sections/HeroHeader";
import ServicesAndBenefits from "../Components/sections/ServicesAndBenefits";
import About from "../Components/sections/About";
import Reinsurance from "../Components/sections/Reinsurance";
import Testimonies from "../Components/sections/Testimonies";
import Contact from "../Components/sections/Contact";
import Partners from "../Components/sections/Partners";
import PianosForSale from "../Components/sections/PianosForSale";

const Home: React.FC = () => {

    return (
        <>
            <HeroHeader/>
            <About/>
            <ServicesAndBenefits/>
            <Reinsurance/>
            <PianosForSale/>
            <Testimonies/>
            <Contact/>
            <Partners/>
        </>
    )
};

export default Home;
