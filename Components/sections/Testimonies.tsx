import React from "react";
import styles from "../../styles/Testimonies.module.scss";

interface TestimonyProps {
    quote: string,
    author: string,
    city: string
}

const TESTIMONIES: Array<TestimonyProps> = [
    {
        quote: 'Je tiens à vous remercier de la grande qualité de votre savoir-faire. Vous avez procédé avec efficacité et professionnalisme à l’harmonisation, au réglage et à l’accord de mon piano.',
        author: 'Mme MERLE-RAYMOND',
        city: 'Orgerus'
    },
    {
        quote: 'Nous sommes très reconnaissants pour tout le travail effectué sur notre vieux piano qui n’avait pas vu d’accordeur depuis plus de vingt ans… Nous sommes impressionnés par le professionnalisme de Robin, allié à un art de la pédagogie si bienveillante. Que dire aussi de son perfectionnisme qui ne ménage ni son temps ni sa peine. Bravo et merci encore.',
        author: 'M. et Mme KLEINBERGER',
        city: 'Longnes'
    }
]

const Testimonies: React.FC = () => {
    return (
        <section
            className={`${styles.testimonies} relative isolate overflow-hidden px-6 pt-20 sm:py-16 lg:px-8 text-black`}>
            <span className="anchor" id="temoignages"></span>

            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Témoignages
                </h2>
            </div>

            {TESTIMONIES.map((testimony: TestimonyProps) => (
                <div key={testimony.author} className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                            <p>
                                “{testimony.quote}”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            {/*<img*/}
                            {/*    className="mx-auto h-10 w-10 rounded-full"*/}
                            {/*    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                            {/*    alt=""*/}
                            {/*/>*/}
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold">{testimony.author}</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true"
                                     className="fill-gray-900">
                                    <circle cx={1} cy={1} r={1}/>
                                </svg>
                                <div>{testimony.city}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            ))}

        </section>
    );
};

export default Testimonies;
