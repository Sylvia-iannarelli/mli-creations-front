import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { PiHeartStraightThin } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const BestSellers = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://mli-creations-back-office.iannarelli.fr/api/products").then(res => res.json()).then(data => setProducts(data))
    }, [])

    const bestSellers = products.filter((item) => item.status === "coups-de-cœur")

    console.log(products)
    console.log(bestSellers)

    return (
        <div id="bestSellers" className='max-w-screen-2xl container mx-auto xl:px-28 px-4 pt-20'>
            <div className='flex justify-center pt-20'>

                <div className='mb-4 flex flex-col md:flex-row items-center gap-4'>
                    <p className='uppercase text-center bg-Gold text-Black md:p-3 p-3 mb-12 rounded-md inline-flex text-xl'>Les coups de cœur <PiHeartStraightThin /> <PiHeartStraightThin /> <PiHeartStraightThin /></p>
                </div>

            </div>

            {/* Best sellers card */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bestSellers.map((product) => (
                            <SwiperSlide className="pb-8" key={product.id}>
                                <Link to={`/shop/${product.id}`}>
                                    <img className='mx-auto w-full rounded-lg hover:scale-105 transition-all duration-300' src={`https://mli-creations-back-office.iannarelli.fr/uploads/photos/${product.picture}`} alt="" />
                                </Link>
                                <div className='mt-3 px-1'>
                                    <h4 className='text-base mb-1'>{product.name}</h4>
                                    <div className='flex justify-between'>
                                        <p className='text-Black/50'>{product.type.name}</p>
                                        <p className='font-semibold'>{product.price} €</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default BestSellers