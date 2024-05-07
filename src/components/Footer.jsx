import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
            <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* company info */}
            <div className="md:w-[400px]">
                <Link to="/">
                <img src="/logo.svg" alt="" />
                </Link>
                <p className="my-8 text-Black/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            {/* Catalog */}
            <div className="text-Black">
                <h4 className="font-semibold mb-3">CATALOGUE</h4>
                <div className="space-y-2">
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Bagues
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Boucles d'oreille
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Bracelets
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Colliers
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Pendentifs
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Autres bijoux
                </Link>
                </div>
            </div>

            {/* CUSTOMER SERVICES */}
            <div className="text-Black">
                <h4 className="font-semibold mb-3">INFORMATIONS</h4>
                <div className="space-y-2">
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Qui suis-je ?
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Soin des bijoux et réparation
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Conditions générales de vente
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Questions fréquentes
                </Link>
                </div>
            </div>

            {/* ABOUT US */}
            <div className="text-Black">
                <h4 className="text-transparent font-semibold mb-3">...</h4>
                <div className="space-y-2">
                    <Link to="/" className="text-sm block hover:text-orange-500">
                    Votre compte & vos commandes
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Conditions d'utilisation du site
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Livraisons et retours
                </Link>
                <Link to="/" className="text-sm block hover:text-orange-500">
                    Mentions légales
                </Link>
                </div>
            </div>
            </div>
        </div>

        {/* footer bottom */}
        <div className="bg-Black">
        <p className="text-white text-center items-center py-3">© {currentYear} mli-creations</p>
        </div>
    </footer>
    );
};

export default Footer;