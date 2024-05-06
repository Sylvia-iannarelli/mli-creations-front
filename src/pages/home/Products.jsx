import React, { useEffect, useState } from 'react'
import { PiSortAscendingDuotone } from "react-icons/pi"
import Cards from '../../components/Cards'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOption, setSortOption] = useState("default")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json")
                const data = await response.json()
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    // console.log(products)

    // filtering function
    const filterItems = (category) => {
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category)

        setFilteredItems(filtered)
        setSelectedCategory(category)
        setSortOption("default")
    }

    // show all products
    const showAll = () => {
        setSortOption("default")
        setFilteredItems(products)
        selectedCategory("all")
    }

    // sorting functionality
    const handleSortChange = (option) => {
        setSortOption(option)

        // logic for sorting
        let sortedItems = [...filteredItems]
        
        switch (option) {
            case "Nouveaute" :
                sortedItems.sort((a, b) => b.id - a.id)
                break;
            case "A-Z" :
                sortedItems.sort((a, b) => a.title.localeCompare(b.title))
                break;
            case "Z-A" :
                sortedItems.sort((a, b) => b.title.localeCompare(a.title))
                break;
            case "low-to-high" :
                sortedItems.sort((a, b) => a.price - b.price)
                break;
            case "high-to-low" :
                sortedItems.sort((a, b) => b.price - a.price)
                break;
            case "default" :
                break;
            }

            setFilteredItems(sortedItems)

    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='text-3xl text-center my-8'>Tous les bijoux</h2>

            {/* Products */}
            <div>
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
                    {/* Options de filtre */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button className="hover:text-Gold" onClick={showAll}>Tous les bijoux</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Bague")}>Bagues</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Boucles-d-oreille")}>Boucles d&apos;oreille</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Bracelet")}>Bracelets</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Collier")}>Colliers</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Pendentif")}>Pendentifs</button>
                        <button className="hover:text-Gold" onClick={() => filterItems("Autre")}>Autres bijoux</button>
                    </div>

                    {/* Options de tri */}
                    <div className='flex justify-end mb-4'>
                        <div className='bg-Gold p-2 rounded-l-lg items-center'>
                            <PiSortAscendingDuotone className='text-Black h-5 w-5'/>
                        </div>

                        <select 
                            id="sort"
                            onChange={(e) => handleSortChange(e.target.value)}
                            value={sortOption}
                            className='bg-Gold 
                            text-Black px-2 py-1 rounded-r-lg '>
                                <option value="default">Aucun</option>
                                <option value="Nouveaute">Nouveauté</option>
                                <option value="A-Z">A - Z</option>
                                <option value="Z-A">Z - A</option>
                                <option value="low-to-high">Prix croissant</option>
                                <option value="high-to-low">Prix décroissant</option>
                        </select>
                    </div>
                </div>

                <Cards filteredItems={filteredItems} />

            </div>
        </div>
    )
}

export default Products