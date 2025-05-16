import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

const Welcome: React.FC = () => {
  const slides = [
    { id: 1, image: images.HOV_4, title: 'home of visuals', subtitle: 'Where every tale becomes timeless.' },
    { id: 2, image: images.HOV_2, title: 'visual stories', subtitle: 'Experience imagination come alive.' },
    { id: 3, image: images.HOV_3, title: 'creative space', subtitle: 'Unleash your vision in every frame.' },
    { id: 3, image: images.HOV_1, title: 'home of visuals', subtitle: 'Experience imagination come alive.' },
    { id: 3, image: images.HOV_5, title: 'creative space', subtitle: 'Unleash your vision in every frame.' },
  ];

  return (
    <main>

      <section className="p-4">
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
              <div className="w-full h-[calc(100vh-20px)] bg-[#EECACA] text-center flex md:items-start items-center justify-center flex-col text-white overflow-hidden relative">
                <div className='w-full h-full absolute bg-black'>
                  <img src={slide.image} alt="Welcome" className='bg-[#EECACA] w-full h-full object-cover object-center absolute opacity-50' />
                </div>

                <div className='z-10 md:w-[500px] w-full px-5 xl:ml-20'>
                  <h1 className='uppercase font-bold xl:text-[48px] lg:text-[40px] text-[30px] md:leading-18 leading-13 z-10 operetta border-b-1 px-0 w-fit mx-auto'>{slide.title}</h1>
                  <h2 className='island-moments-regular mb-24 font-light xl:text-[30px] lg:text-[24px] text-[20px] lg:leading-16 leading-10 z-10 mt-8'>{slide.subtitle}</h2>

                  <Link to="/hov" className='md:text-[30px] text-[20px] leading-16 md:mt-24 mt-14 font-normal border md:border-3 border-1 rounded-sm md:px-24 px-10 md:py-5 py-2 z-10'>
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
