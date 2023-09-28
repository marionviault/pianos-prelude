import React from "react";
import styles from "../../styles/Testimonies.module.scss";

const Testimonies: React.FC = () => {
    return (
        <section id="temoignages" className={`${styles.testimonies} relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:px-8`}>

            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Témoignages
                </h2>
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “Je tiens à vous remercier de la grande qualité de votre savoir-faire. Vous avez procédé
                            avec efficacité et professionnalisme à l’harmonisation, au réglage et à l’accord de mon piano.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        {/*<img*/}
                        {/*    className="mx-auto h-10 w-10 rounded-full"*/}
                        {/*    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                        {/*    alt=""*/}
                        {/*/>*/}
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Mme MERLE-RAYMOND</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">Orgerus</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <br/>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “Nous sommes très reconnaissants pour tout le travail effectué sur notre vieux piano qui n’avait pas vu d’accordeur depuis plus de vingt ans… Nous sommes impressionnés par le professionnalisme de Robin, allié à un art de la pédagogie si bienveillante.
                            Que dire aussi de son perfectionnisme qui ne ménage ni son temps ni sa peine.
                            Bravo et merci encore.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        {/*<img*/}
                        {/*    className="mx-auto h-10 w-10 rounded-full"*/}
                        {/*    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                        {/*    alt=""*/}
                        {/*/>*/}
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">M. et Mme KLEINBERGER</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">Longnes</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

        </section>
    );
};

export default Testimonies;
