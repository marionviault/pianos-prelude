export interface PianoProps {
    model: string;
    brand: string;
    photos: [
        { src: string }
    ];
    alt: string;
    year: number;
    color: string,
    price: number;
    manufacturing: string;
    size: string;
    description: string;
    sold: boolean;
}
