import React from 'react'
import { images } from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const Home: React.FC = () => {

  const slides = [
    { id: 1, image1: images.tasveerThumb_1, image2: images.tasveerThumb_2, title: 'Miral & Bhargav', description: "Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved." },
    { id: 2, image1: images.tasveerThumb_1, image2: images.tasveerThumb_2, title: 'John & Doe', description: "Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved." },
    { id: 3, image1: images.tasveerThumb_1, image2: images.tasveerThumb_2, title: 'Lillyo & Vincholy', description: "Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved." },
  ];


  return (
    <main>
      <section>
        <div className="w-full h-[100vh] bg-[#D9D9D9] text-center flex items-center justify-center flex-col text-white relative overflow-hidden">
          <video src="http://homeofvisuals.in/assets/home/homePage.mp4" autoPlay muted loop className='h-[100vh] w-full object-cover object-center'></video>
        </div>
      </section>

      <section>
        <div className="text-center max-w-[580px] mx-auto px-5 py-25 sm:mb-20 mb-10" >
          <h2 className='lg:text-[20px] text-[24px] lg:leading-30 leading-20 mb-6 uppercase tracking-[5px]'>Our mission</h2>
          <h3 className='lg:text-[65px] md:text-[45px] text-[44px] lg:leading-30 leading-18 font-light'>To break <span className='block italic'>Stereotypes one</span> frame at a time</h3>

          <div className="flex justify-center items-center my-14">
            <div className="h-[100px] w-[100px]">
              <img src={images.hovSymbol} alt="" className='object-cover object-center rounded-full' />
            </div>
          </div>

          <p className='lg:text-[24px] text-[20px] lg:leading-17 leading-12 lg:mb-20 mb-10 font-light'>Others who use this device won't see your activity, so you can browse more privately.</p>
          <p className='lg:text-[24px] text-[20px] lg:leading-17 leading-12 font-light'>Collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>
        </div>
      </section>

      <section>
        <div className="flex mb-24" >
          <img src={images.tasveerThumb_1} alt="" className='bg-[#D9D9D9] w-full h-[559px] object-cover object-center' />
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center lg:py-24 py-10 px-5 lg:mb-20 mb-16">
          <h2 className='lg:text-[128px] md:text-[100px] text-[70px] lg:leading-50 md:leading-40 leading-30 lg:-mb-14 sm:-mb-10 -mb-5 text-center font-light'><i>Client</i> PRAISE</h2>

          <div className='flex max-w-[753px] w-full mx-auto justify-center text-center relative'>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              speed={1000}
              className="w-full"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>

                  <div className="flex gap-4 flex-row justify-center">
                    <div className="bg-[#d9d9d9] w-[270px]">
                      <img src={slide.image1} alt="" className='bg-[#D9D9D9] w-full sm:h-[400px] h-[250px] object-cover object-center' />
                    </div>
                    <div className="bg-[#d9d9d9] w-[270px]">
                      <img src={slide.image2} alt="" className='bg-[#D9D9D9] w-full sm:h-[400px] h-[250px] object-cover object-center' />
                    </div>
                  </div>

                  <h3 className='lg:text-[36px] text-[30px] lg:leading-17 leading-10 Capitalize mt-24 mb-10'>{slide.title}</h3>

                  <p className='lg:text-[24px] text-[20px] lg:leading-15 leading-12 font-light max-w-[753px] text-center'>{slide.description}</p>
                </SwiperSlide>
              ))}
              <div className="lg:text-[26px] md:text-[20px] text-[16px] lg:leading-17 leading-12 uppercase relative !flex items-center justify-center h-[50px] !z-99999">
                <span className="swiper-button-prev text-black !relative !h-[30px] !w-[100px] !-mt-13 !z-99999">Previous</span>
                <span className='!relative !h-[30px] !w-[100px] text-green !-mt-13 !z-99999'>/</span>
                <span className="swiper-button-next text-black !relative !h-[30px] !w-[100px] !-mt-13 !z-99999">Next</span>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home