import React, { useState } from "react";
import styles from "../../styles/Contact.module.scss";

const Contact: React.FC = () => {

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    function handleName(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setName(event.target.value);
    }

    function handlePhone(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setPhone(event.target.value);
    }

    function handleMessage(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setMessage(event.target.value);
    }

    const MAIL_CONTENT: string =
        `Nom : ${name}
        Tel : ${phone}
        
        Message :
        
        ${message}`;

    return (
        <section className={`${styles.contact} isolate px-6 pt-20 sm:py-8 lg:px-8`}>
            <span className="anchor" id="contact"></span>

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Contact
                </h2>
                <p className="mt-2 text-base leading-7">
                    Pour toute question, demande de devis, projet particulier
                </p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-10"
                  action={`mailto:vitkov@live.fr?subject=[PIANOS-PRELUDE] Contact&body=${encodeURIComponent(MAIL_CONTENT)}`}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                            Nom / Société
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="first-name" autoComplete="given-name" onChange={handleName}
                                   className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6">
                            Téléphone
                        </label>
                        <div className="mt-2.5">
                            <input type="tel" name="first-name" autoComplete="tel" required onChange={handlePhone}
                                   className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6">
                            Votre demande
                        </label>
                        <div className="mt-2.5">
                                <textarea name="message" rows={4} onChange={handleMessage}
                                          className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className="flex gap-x-4 sm:col-span-2 ">
                        <p className="text-sm leading-6">
                            Ces données ne sont pas stockées et me permettent seulement de comprendre votre projet et de
                            vous recontacter.
                        </p>
                    </div>

                </div>
                <div className="mt-10">
                    <button type="submit"
                           className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm">
                        Me contacter
                    </button>
                </div>
            </form>

        </section>
    );
}

export default Contact;
