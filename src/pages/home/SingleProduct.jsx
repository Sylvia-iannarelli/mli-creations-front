import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://mli-creations-back-office.iannarelli.fr/api/products")
                const data = await response.json()
                const product = data.filter((p) => p.id == id)
                console.log(product)
                setProducts(product[0])
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
    }, [id])

    const {picture, name, price, description} = products

    return (
        <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='p-3 max-w-7xl m-auto'>

                <div className='mt-4'>
                    <a href="/" className='text-gray-600 hover:text-Gold'>Page d&apos;accueil / </a>
                    <a href="/shop" className='font-bold text-Black'>Détail du bijou</a>
                </div>

                <div className='mt-4 sm:mt-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-max'>
                        <div>
                            <img src={`https://mli-creations-back-office.iannarelli.fr/uploads/photos/${picture}`} alt="Photo du bijou sélectionné" className='w-full rounded-lg' />
                        </div>

                        {/* Product details */}
                        <div>
                            <h1 className='text-3xl text-Black font-semibold sm:text-4xl'>{name}</h1>

                            <p className='text-xl my-2 text-Black font-semibold sm:text-2xl'>{price} €</p>

                            <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>{description}</p>

                            <div>
                                <div className='text-left flex flex-col gap-2 w-full mt-2'>
                                    <div>
                                        <label className='font-semibold text-Black text-md'>Quantité</label>
                                        <input type="number" name="price" id="price" defaultValue={1} className='text-md border border-gray-300 font-semibold max-w-40 outline-none rounded-md ml-2 py-2 px-2 md:py-3 md:px-4 focus:border-Gold'/>
                                    </div>
                                    <div className='w-full text-left my-4 flex justify-center'>
                                        <button className='flex justify-center items-center gap-2 py-3 px-4 bg-Gold border border-Gold text-Black rounded-lg ease-in-out duration-150 shadow-slate-600 hover:bg-Blue1 hover:text-Black lg-m-0 md:px-6'><span>Ajouter au panier</span><FaArrowAltCircleRight/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct