import React from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

const AboutUs: React.FC = () => {

  const slides = [images.tasveerThumb_1, images.tasveerThumb_2, images.tasveerThumb_3];

  return (
    <main className='flex lg:flex-row flex-col w-full h-full relative'>
      <section className='relative lg:w-[50%] w-[100%]'>
        <div className="w-full lg:h-[100vh] h-[95vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col relative overflow-hidden relative">
          <Swiper
            direction="vertical"
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
            {slides.map((slide: string, i: number) => (
              <SwiperSlide key={i}>
                <div className="relative">
                  <img
                    src={slide}
                    alt="Tasveer"
                    className='bg-[#D9D9D9] h-[100vh] w-[100vw] object-cover object-center relative'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='relative lg:w-[50%] w-[100%]'>
        <div className='bg-[#dfc1b1] lg:h-[100vh] min-h-[300px] px-15 flex items-center'>
          <div className='text-center flex items-center justify-center flex-col max-w-[400px] mx-auto py-20 min-h-[calc(100vh-500px)]'>
            <h2 className='lg:text-[44px] text-[30px] lg:leading-18 leading-10 mb-8 font-light operetta lg:pt-15'>Every <i>love story deserves</i> its masterpiece.</h2>
            <p className='text-[16px] leading-8 font-light'>Some photographers are directors, and some are  collectors. The team from Home of Visuals thrive on the thin line between the two - while some moments need direction, the others solely need to be collected. Through our blend of creativity, passion, and love for love, we craft visual narratives reflective of all the emotions and an unforgettable trip down your memory lane - from the laughter that fills the air to stolen glances, down till the bittersweet tears.</p>
            <Link to="/contactus" className='uppercase text-[14px] border border-1 py-4 px-10 mt-20 flex tracking-[4px]'>Frame your forever</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs