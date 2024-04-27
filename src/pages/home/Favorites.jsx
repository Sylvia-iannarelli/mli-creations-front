import React from 'react'
import { PiHeartStraightThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-12'>
        {/* Favorites grid */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='uppercase md:-rotate-90 text-center bg-Black text-white md:p-1
            .5 p-2 rounded-sm inline-flex'>Voir les articles coup de cœur <PiHeartStraightThin /> <PiHeartStraightThin /> <PiHeartStraightThin /></p>
            <div className='md:w-1/2'>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded' src="/images/favoris/image3.jpg" alt="" /></Link>
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2'>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded' src="/images/favoris/image1.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded' src="/images/favoris/image2.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded' src="/images/favoris/image5.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded' src="/images/favoris/image4.jpg" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Favorites