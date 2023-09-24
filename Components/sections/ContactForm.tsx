import Button from "./../Button";
import React, {useState} from "react";

const ContactForm: React.FC = () => {

    const [subject, setSubject] = useState('antoine');

    function handleSubject(event: { target: { value: React.SetStateAction<string>; }; }) {
        setSubject(event.target.value)
    }

    return (
        <form id="contact" className="flex">

            <div className="inline-flex basis-3/4 border-2 border-slate-400 rounded-lg">

                <input className="w-full p-2 rounded-lg" type="email" placeholder="example@gmail.com"/>

                <input className="w-full p-2 rounded-lg" type="text" placeholder="Devis, Contact, Vente, ..."
                       onChange={handleSubject}/>

                <input className="w-full p-2 rounded-lg" type="text" placeholder="Mon message"/>

                <a href={`"mailto:vitkov@live.fr?subject=${subject}&body=Bla bla bla"`}>Mail to</a>

                <Button label="Envoyer"
                        classList="bg-slate-400 border-2 border-slate-400 rounded-lg float-right text-white"/>

            </div>

        </form>
    );
};

export default ContactForm;
