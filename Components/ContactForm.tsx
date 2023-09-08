import Button from "./Button";
import React from "react";

const ContactForm: React.FC = () => {

    return (
        <form className="flex">

            <div className="inline-flex basis-3/4 border-2 border-slate-400 rounded-lg">

                <input className="w-full p-2  rounded-lg" type="text" placeholder="formulaire de contact"/>

                <Button label="Envoyer"
                        classList="bg-slate-400 border-2 border-slate-400 rounded-lg float-right text-white"/>

            </div>

        </form>
    );
};

export default ContactForm;
