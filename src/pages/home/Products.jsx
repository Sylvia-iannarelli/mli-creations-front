import React, { useEffect, useState } from 'react'
import { PiSortAscendingDuotone } from "react-icons/pi"
import Cards from '../../components/Cards'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json")
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    console.log(products)

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='text-3xl text-center my-8'>Tous les bijoux</h2>

            {/* Products */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    {/* Options de filtre */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button>Tous les bijoux</button>
                        <button>Bagues</button>
                        <button>Boucles d&apos;oreille</button>
                        <button>Bracelets</button>
                        <button>Colliers</button>
                        <button>Pendentifs</button>
                        <button>Autres bijoux</button>
                    </div>

                    {/* Options de tri */}
                    <div className='flex justify-end mb-4'>
                        <div className='bg-Black p-2 rounded-l-lg items-center'>
                            <PiSortAscendingDuotone className='text-white h-5 w-5'/>
                        </div>
                        <select className='bg-Black 
                        text-white px-2 py-1 rounded-r-lg '>
                            <option value="default">Nouveauté</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Prix croissant</option>
                            <option value="higt-to-low">Prix décroissant</option>
                        </select>
                    </div>
                </div>

                <Cards filteredItems={products} />

            </div>
        </div>
    )
}

export default Products