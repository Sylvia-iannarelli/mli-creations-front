import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"
import { PiUserCircleLight } from "react-icons/pi";
import { PiHandbagLight } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import logo from "/Logo-mli-creations-blanc.png"
import { Link } from 'react-router-dom';
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {title: "Nouvelle collection", path: "/"},
    {title: "Tous les bijoux", path: "/"},
    {title: "Me-contacter", path: "/"}
  ]
  return (
    <header className="max-w-screen-2xl mx-auto container xl:px-28 px-4 top-0 right-0 left-0 fixed z-10 bg-[url('/images/Capture-BG.JPG')]">
        <nav className="flex justify-between items-end container-fluid md:py-4 pt-6 pb-3">
            <IoSearchOutline className='text-white w-5 h-5 cursor-pointer hidden md:block'/>

            {/* logo */}
            <a href="/"><img className="w-50" src={logo} alt="logo de la marque mli-creations" /></a>

            {/* boutons compte et panier */}
            <div className="text-lg text-white sm:flex items-center gap-4 hidden">
                <a href="/" className="flex items-center gap-2">{<PiUserCircleLight />} Compte</a>
                <a href="/" className="flex items-center gap-2">{<PiHandbagLight />} Panier</a>
            </div>

            {/*  navbar pour petits écrans*/}
            <div className='sm:hidden w-6 h-6'>
              <button onClick={toggleMenu}>
                {
                  isMenuOpen ? <LiaTimesSolid className='w-6 h-6 text-white' /> : <LiaBarsSolid className='w-6 h-6 text-white' />
                }
              </button>
            </div>

        </nav>

        {/* Menu catégories */}
        <div className='pt-4'>
          <ul className='lg:flex items-center justify-between text-white hidden'>
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
        <div className='max-w-1/2 absolute right-0'>
          <ul className={`bg-Black text-white px-4 py-2 rounded-lg ${isMenuOpen ? "" : "hidden"}`}>
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