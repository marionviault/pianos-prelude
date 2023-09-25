import React, { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Contact: React.FC = () => {

    const [ subject, setSubject ] = useState('');
    const [ body, setBody ] = useState('');

    function handleSubject(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setSubject(event.target.value);
    }

    function handleBody(event: { target: { value: React.SetStateAction<string>; }; }): void {
        setBody(event.target.value);
    }

    const [ agreed, setAgreed ] = useState(false)

    return (
        <section id="contact">

            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Prénom *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Société
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone-number"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Téléphone
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                                Sujet *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleSubject}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="piano-infos"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Votre piano *
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="piano-infos"
                                    id="piano-infos"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-maintenance"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Date du dernier entretien
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-maintenance"
                                    id="last-maintenance"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Votre demande *
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    onChange={handleBody}
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-4 sm:col-span-2 ">
                            <p className="text-sm leading-6 text-gray-600">
                                Ces données ne sont pas stockées et me permettent seulement de comprendre votre projet et de vous recontacter.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <a
                            href={`mailto:vitkov@live.fr?subject=${subject}&body=${encodeURIComponent(body)}`}
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Me contacter
                        </a>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Contact;
