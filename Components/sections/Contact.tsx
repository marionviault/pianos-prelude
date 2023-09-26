import React, {useState} from "react";

const Contact: React.FC = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    function handleName(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setName(event.target.value);
    }

    function handleBody(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setBody(event.target.value);
    }

    return (
        <section id="contact" className="isolate bg-white px-6 py-24 sm:py-8 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Contact
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Pour toute question, demande de devis, projet particulier
                </p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nom *
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="first-name" autoComplete="given-name" onChange={handleName}
                                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Téléphone
                        </label>
                        <div className="relative mt-2.5">
                            <input type="tel" name="phone-number" autoComplete="tel"
                                   className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="piano-infos" className="block text-sm font-semibold leading-6 text-gray-900">
                            Votre piano *
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="piano-infos"
                                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last-maintenance"
                               className="block text-sm font-semibold leading-6 text-gray-900">
                            Date du dernier entretien
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="last-maintenance"
                                   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Votre demande *
                        </label>
                        <div className="mt-2.5">
                                <textarea name="message" rows={4} onChange={handleBody}
                                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className="flex gap-x-4 sm:col-span-2 ">
                        <p className="text-sm leading-6 text-gray-600">
                            Ces données ne sont pas stockées et me permettent seulement de comprendre votre projet et de
                            vous recontacter.
                        </p>
                    </div>

                </div>
                <div className="mt-10">
                    <a href={`mailto:vitkov@live.fr?subject=[PIANOS-PRELUDE] Contact&body=${encodeURIComponent(body)}`}
                       className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Me contacter
                    </a>
                </div>
            </form>

        </section>
    );
}

export default Contact;
