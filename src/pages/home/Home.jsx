import React from 'react'
import Banner from './Banner'
import Products from './Products'
import BestSellers from './BestSellers'

const Home = () => {
  return (
    <div>
      {/* <ScrollToHashElement /> */}
      <Banner />
      <Products />
      <BestSellers />
    </div>
  )
}

export default Home