import Link from 'next/link'
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {

    return (
        <footer>
            <div className="bg-blue-300 flex">
                <Link href="https://www.facebook.com/">
                    <a target="_blank">
                        <Image src="/facebook-logo.png" alt="Facebook logo" width="60" height="60"/>
                    </a>
                </Link>
                <Link href="https://twitter.com/?lang=fr">
                    <a target="_blank">
                        <Image src="/twitter-logo.png" alt="Twitter logo" width="60" height="60"/>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/">
                    <a target="_blank">
                        <Image src="/instagram-logo.png" alt="Instagram logo" width="60" height="60"/>
                    </a>
                </Link>
            </div>

            <div className="py-8 px-12">
                Footer
            </div>
        </footer>
    );
};

export default Footer;
