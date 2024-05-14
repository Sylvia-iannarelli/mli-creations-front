import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
        {
            // Pour montrer un nombre donné de produits : filteredItems.slice(0, 8).map((item) => (
            filteredItems.map((item) => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img className='mx-auto w-full rounded-lg hover:scale-105 transition-all duration-300' src={`https://mli-creations-back-office.iannarelli.fr/uploads/photos/${item.picture}`} alt="" />
                    </Link>
                    <div className='mt-3 px-1'>
                        <h4 className='text-base mb-2'>{item.name}</h4>
                        <div className='flex justify-between'>
                            <p className='text-Black/50'>{item.type.name}</p>
                            <p className='font-semibold'>{item.price} €</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards