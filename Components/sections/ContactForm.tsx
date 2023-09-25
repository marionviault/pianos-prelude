import React, {useState} from "react";

const ContactForm: React.FC = () => {

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    function handleSubject(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setSubject(event.target.value);
    }

    function handleBody(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setBody(event.target.value);
    }

    return (
        <section id="contact">

            <h2>Contact</h2>

            <form className="flex border-2 border-slate-400 rounded-lg">

                <input className="w-full p-2 rounded-lg" type="text" placeholder="Devis, Achat, Vente"
                       onChange={handleSubject}/>

                <textarea className="w-full p-2 rounded-lg" placeholder="Mon message"
                          onChange={handleBody}/>

                <button className="rounded-lg py-2 px-4 bg-slate-400 border-2 border-slate-400 float-right text-white">
                    <a href={`mailto:vitkov@live.fr?subject=${subject}&body=${encodeURIComponent(body)}`}>Envoyer</a>
                </button>

            </form>

        </section>
    );
};

export default ContactForm;
