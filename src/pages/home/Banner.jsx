import React from 'react'
import bannerImg from '/images/Collier1.jpg'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container bg-primaryBG py-12 xl:px-28 px-4'>
        <div className='pt-24 flex flex-col md:flex-row-reverse justify-between items-center gap-5'>
            <div>
                <img className='rounded' src={bannerImg} alt="photo d'un collier" />
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-4xl font-light mb-3'>Nouvelle collection</h1>
                <p className='text-l mb-3'>Inspirée des couleurs chatoyantes de l&apos;été qui approche, resplendissez sous le soleil...</p>
                <button className='bg-Black hover:bg-orange-500 px-6 py-2 mb-2 text-white font-semibold rounded'>Découvrir</button>
            </div>
        </div>
    </div>
  )
}

export default Banner