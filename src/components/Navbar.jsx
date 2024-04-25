import React from 'react'
import { IoSearchOutline } from "react-icons/io5"
import logo from "/Logo-mli-creations.png"
import { HiOutlineUser } from "react-icons/hi2";
import { PiHandbagLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="max-w-screen-2x1 x1:px-28 px-4 ">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
            <IoSearchOutline />

            {/* logo */}
            <a href="/"><img src={logo} alt="logo de la marque mli-creations" /></a>

            {/* boutons compte et achats */}
            <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
                <a href="/" className="flex items-center gap-2">{<HiOutlineUser />} Compte</a>
                <a href="/" className="flex items-center gap-2">{<PiHandbagLight />} Panier</a>
            </div>

        </nav>
    </header>
  )
}

export default Navbar