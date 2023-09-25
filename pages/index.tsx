import React from "react";
import HeroHeader from "../Components/sections/HeroHeader";
import ServicesAndBenefits from "../Components/sections/ServicesAndBenefits";
import About from "../Components/sections/About";
import Reinsurance from "../Components/sections/Reinsurance";
import Testimonies from "../Components/sections/Testimonies";
import Contact from "../Components/sections/Contact";
import Trusted from "../Components/sections/Trusted";
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
            <Trusted/>
        </>
    )
};

export default Home;
