import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const Welcome: React.FC = () => {
  const slides = [
    { id: 1, image: images.HOV_1 },
    { id: 2, image: images.HOV_2 },
    { id: 3, image: images.HOV_3 },
  ];

  return (
    <main>

      <section className="p-2">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1000}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-[calc(100vh-10px)] bg-[#dfc1b1] text-center flex md:items-start items-center justify-center flex-col text-white overflow-hidden relative">
                <div className='w-full h-full absolute bg-black'>
                  <img src={slide.image} alt="Welcome" className='bg-[#dfc1b1] w-full h-full object-cover object-center absolute opacity-50' />
                </div>

                <div className='z-10 md:w-[500px] w-full px-5 xl:ml-20'>
                  <h1 className='uppercase font-bold xl:text-[36px] lg:text-[30px] text-[24px] md:leading-18 leading-13 z-10 operetta px-0 w-fit mx-auto'>HOME OF VISUALS</h1>
                  {/* <h2 className='island-moments-regular mb-24 font-light xl:text-[24px] lg:text-[20px] text-[16px] lg:leading-16 leading-10 operetta z-10 mt-8'>Where every love story becomes timeless tale</h2> */}
                  <h2 className='mb-15 font-light xl:text-[20px] text-[16px] lg:leading-14 leading-10 operetta-light z-10 mt-4 tracking-[1px]'>Where every love story becomes timeless tale</h2>

                  <Link to="/hov" className='md:text-[20px] text-[16px] leading-12 mt-5 font-normal border md:border-2 border-1 border-white rounded-md px-10 md:py-4 py-2 z-10 bg-transparent hover:bg-white text-white hover:text-black tracking-[1px] duration-200'>
                    WELCOME
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </main>
  )
}

export default Welcome
