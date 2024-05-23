import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://mli-creations-back-office.iannarelli.fr/api/products").then(res => res.json()).then(data => setProducts(data))
    }, [])

    const star = products.filter((item) => item.status === "star")

    const banner = products.filter((item) => item.status === "nouvelle-collection")
    
    return (
        <div id="new" className='max-w-screen-2xl mx-auto container bg-primaryBG pt-20 xl:px-28 px-4'>
            <div className='pt-20 flex flex-col md:flex-row justify-between items-center gap-5'>
                <div className='md:w-1/2'>
                    <h1 className='text-4xl font-light mb-3'>Nouvelle collection</h1>
                    <p className='text-l mb-3'>Inspirée des couleurs chatoyantes de l&apos;été qui approche, resplendissez sous le soleil...</p>
                    <button className='bg-Gold border border-Gold hover:bg-Blue1 hover:text-Black px-6 py-2 mb-2 text-Black rounded-lg'>Découvrir</button>
                </div>
                <div className='md:w-1/2'>
                    {
                        star.map((product) => (

                            <Link key={product.id} to={`/bijou/${product.id}`}>
                                <img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src={`https://mli-creations-back-office.iannarelli.fr/uploads/photos/${product.picture}`} alt="" />
                            </Link>
                        ))
                    }
                </div>

                <div className='md:w-1/2'>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            banner.map((product) => (

                                <Link key={product.id} to={`/bijou/${product.id}`}>
                                    <img className='w-full hover:scale-105 transition-all duration-200 rounded-lg' src={`https://mli-creations-back-office.iannarelli.fr/uploads/photos/${product.picture}`} alt="" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner