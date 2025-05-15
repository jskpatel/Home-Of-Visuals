import React from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const AboutUs: React.FC = () => {

  const slides = [images.tasveerThumb_1, images.tasveerThumb_2, images.tasveerThumb_3];

  return (
    <main className='flex md:flex-row flex-col w-full h-full'>
      <section className='flex-1'>
        <div className="w-full h-[100vh] min-h-[400px] bg-[#D9D9D9] text-center flex items-center justify-center flex-col text-white relative overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={100}
            className="w-full"
          >
            {slides.map((slide: string, i: number) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img
                    src={slide}
                    alt="Tasveer"
                    className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute grayscale'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <img src={images.aboutHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute grayscale' /> */}
          {/* <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 relative z-1'>about</h1> */}
        </div>
      </section>

      <section className='flex-1'>
        <div className='bg-[#EECACA] h-[100vh] min-h-[300px] px-15 flex items-center'>
          <div className='text-white text-center flex items-center justify-center flex-col max-w-[500px] mx-auto py-20 min-h-[calc(100vh-500px)]'>
            <h2 className='lg:text-[50px] text-[40px] lg:leading-24 leading-16 mb-8 font-light'>Break The Stereotypes</h2>
            <p className='lg:text-[26px] text-[20px] lg:leading-14 leading-12 font-light'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>
            <Link to="/aboutus" className='uppercase text-[16px] text-white border border-1 py-5 px-15 mt-20 flex tracking-[5px]'>Frame your forever</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs