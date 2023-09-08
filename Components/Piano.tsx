import React from "react";

interface PianoProps {
    name: string;
    image: string;
    description: string;
}

const Piano: React.FC<PianoProps> = (piano: PianoProps) => {
    return (
        <div className="flex">

            <div className="basis-2/5">
                <img src={piano.image} alt=""/>
            </div>

            <div className="basis-3/5 text-sm">
                <div className="uppercase">{piano.name}</div>
                <div>{piano.description.substring(0, 130)}...</div>
            </div>

        </div>
    );
};

export default Piano;
