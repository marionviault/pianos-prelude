import ContactForm from "../Components/ContactForm";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="divide-y-2 divide-slate-400">

            <div className="pt-8 pb-8">
                <ContactForm/>
            </div>

        </div>
    )
}

export default Home;
