import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div id="new" className='max-w-screen-2xl mx-auto container bg-primaryBG pt-20 xl:px-28 px-4'>
        <div className='pt-20 flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className='md:w-1/2'>
                <h1 className='text-4xl font-light mb-3'>Nouvelle collection</h1>
                <p className='text-l mb-3'>Inspirée des couleurs chatoyantes de l&apos;été qui approche, resplendissez sous le soleil...</p>
                <button className='bg-Gold border border-Gold hover:bg-Blue1 hover:text-Black px-6 py-2 mb-2 text-Black rounded-lg'>Découvrir</button>
            </div>
            <div className='md:w-1/2'>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src="/images/favoris/image3.jpg" alt="" /></Link>
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2'>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src="/images/favoris/image1.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src="/images/favoris/image2.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src="/images/favoris/image5.jpg" alt="" /></Link>
                <Link to="/"><img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src="/images/favoris/image4.jpg" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner