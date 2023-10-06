import React from "react";
import { PianoProps } from "../interfaces/piano";
import Image from "next/image";
import Slider from "react-slick";

const PARAMETERS = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
}

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {

    const PHOTOS = piano.photos;

    return (
        <div className="group relative text-white">
            <figure className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                {piano.sold && (
                    <span className="sold">
                        VENDU
                    </span>
                )}
                <Slider {...PARAMETERS}>
                    {PHOTOS.map((photo, index: React.Key) => {
                        return (
                            <Image key={index} src={photo.src} alt={`Photo du ${piano.model}`} width="400" height="400"
                                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        )
                    })}
                </Slider>
            </figure>
            <div className="mt-4 text-sm">
                <div className="flex justify-between">
                    <p className="mt-1">
                        Marque : {piano.brand}
                    </p>
                    <p className="font-medium">
                        {piano.price}
                        <span> €</span>
                    </p>
                </div>
                <p className="mt-1">
                    Modèle : {piano.model}
                </p>
                <p className="mt-1">
                    Année : {piano.year}
                </p>
                <p className="mt-1">
                    Finition : {piano.color}
                </p>
                <p className="mt-1">
                    Fabrication : {piano.manufacturing}
                </p>
                <p className="mt-1">
                    Dimensions : {piano.size}
                </p>
                <p className="mt-1">
                    Description : {piano.description}
                </p>
            </div>
        </div>
    );
};

export default Piano;
