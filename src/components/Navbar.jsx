import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { HiOutlineUser } from "react-icons/hi2";
import { PiHandbagLight } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import logo from "/Logo-mli-creations.png"
import { Link } from 'react-router-dom';
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {title: "Bagues", path: "/"},
    {title: "Boucles d'oreille", path: "/"},
    {title: "Bracelets", path: "/"},
    {title: "Colliers", path: "/"},
    {title: "Pendentifs", path: "/"},
    {title: "Autres", path: "/"}
  ]
  return (
    <header className="max-w-screen-2xl mx-auto container xl:px-28 px-4 absolute top-0 right-0 left-0">
        <nav className="flex justify-between items-center container-fluid md:py-4 pt-6 pb-3">
            <IoSearchOutline className='text-Black w-5 h-5 cursor-pointer hidden md:block'/>

            {/* logo */}
            <a href="/"><img src={logo} alt="logo de la marque mli-creations" /></a>

            {/* boutons compte et panier */}
            <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
                <a href="/" className="flex items-center gap-2">{<HiOutlineUser />} Compte</a>
                <a href="/" className="flex items-center gap-2">{<PiHandbagLight />} Panier</a>
            </div>

            {/*  navbar pour petits écrans*/}
            <div className='sm:hidden'>
              <button onClick={toggleMenu}>
                {
                  isMenuOpen ? <LiaTimesSolid className='w-6 h-6 text-Black' /> : <LiaBarsSolid className='w-6 h-6 text-Black' />
                }
              </button>
            </div>

        </nav>
        
        <hr />

        {/* Menu catégories */}
        <div className='pt-4'>
          <ul className='lg:flex items-center justify-between text-Black hidden'>
            {
              navItems.map(({title, path}) => (
                <li key={title} className='hover:text-orange-500'>
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Menu catégories pour mobile */}
        <div>
          <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
              {
                navItems.map(({title, path}) => (
                  <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                    <Link to="/">{title}</Link>
                  </li>
                ))
              }
            </ul>
        </div>

    </header>
  )
}

export default Navbar