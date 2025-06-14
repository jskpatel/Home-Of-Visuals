import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { aboutImages } from '../Tasveer/constant'

const AboutUs: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)
  
  return (
    <>
      <nav className={`absolute w-full z-4 ${showMobileNav ? 'md:bg-transparent bg-black md:h-fit h-[100vh] top-0 bottom-0' : 'bg-transparent'}`}>
        <div className="w-full px-2 sm:px-6 lg:px-10 lg:py-14 py-8">
          <div className="relative flex sm:items-center sm:justify-between">

            <div className="absolute right-5 flex md:hidden top-0">
              <button
                type="button"
                className="top-px relative inline-flex items-center justify-center p-2 text-[#EECACA] text-[34px] cursor-pointer scale-[2.5]"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                {!showMobileNav ?
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  :
                  <svg className="block size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                }
              </button>
            </div>

            <div className="flex md:flex-row flex-col md:items-center justify-between w-full uppercase">
              <div className={`flex shrink-0 md:items-center ml-3 ${showMobileNav ? 'mb-5' : 'mb-0'}`}>
                <Link to="/" className={`md:text-black ${showMobileNav ? 'text-white' : 'text-black'} lg:text-[26px] text-[20px] operetta-light`}>Home of visuals</Link>
              </div>
              <div className={`md:w-fit w-full ${showMobileNav ? "md:mt-0 mt-10" : "md:flex hidden"}`}>
                <div className="flex md:flex-row flex-col lg:space-x-10 space-x-1 lg:text-[18px] text-[14px] lg:tracking-[1px] tracking-none font-normal">
                  <Link to="/hov" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)} aria-current="page">Home</Link>
                  <Link to="/aboutus" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>About</Link>
                  <Link to="/tasveers" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Tasveers</Link>
                  <Link to="/gaathas" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Gaathas</Link>
                  <Link to="/blogs" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Blogs</Link>
                  <Link to="/contactus" className="px-3 md:py-2 py-4 md:text-black text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Lock Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <main className='flex lg:flex-row flex-col w-full h-full relative'>
        <section className='relative lg:w-[50%] w-[100%]'>
          <div className="w-full lg:h-[100vh] h-[80vh] md:min-h-[400px] min-h-[300px] bg-[#000] text-center flex items-center justify-center flex-col relative overflow-hidden relative">
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
              {aboutImages.map((slide: string, i: number) => (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <img
                      src={slide}
                      alt="Tasveer"
                      className='bg-[#D9D9D9] h-[100vh] w-[100vw] object-cover object-center relative'
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className='relative lg:w-[50%] w-[100%]'>
          <div className='bg-[#dfc1b1] lg:h-[100vh] min-h-[300px] px-15 flex items-center'>
            <div className='text-center flex items-center justify-center flex-col max-w-[400px] mx-auto py-20 lg:min-h-[calc(100vh-500px)] min-h-[calc(100vh-500px)]'>
              <h2 className='lg:text-[44px] text-[30px] lg:leading-18 leading-10 mb-8 font-light operetta lg:pt-15'>Every <i>love story deserves</i> its masterpiece.</h2>
              <p className='text-[16px] leading-8 font-light'>Some photographers are directors, and some are  collectors. The team from Home of Visuals thrive on the thin line between the two - while some moments need direction, the others solely need to be collected. Through our blend of creativity, passion, and love for love, we craft visual narratives reflective of all the emotions and an unforgettable trip down your memory lane - from the laughter that fills the air to stolen glances, down till the bittersweet tears.</p>
              <Link to="/contactus" className='uppercase text-[14px] border border-1 py-4 px-10 mt-20 flex tracking-[4px]'>Frame your forever</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutUs