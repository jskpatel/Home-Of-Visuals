import React, { useState } from 'react'
import { images } from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { videos } from '../../assets/videos/video';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)

  const slides = [
    { id: 1, image1: images.clientPraise1, image2: images.clientPraise2, title: 'Miral & Bhargav', description: "Hey! Thank you so much for the service team #HOUSEOFVISUALS You guys delivered way more then i expected. Kudos to your fantastic team work, dedication and your vision. ✨ ❤️" },
    { id: 2, image1: images.clientPraise3, image2: images.clientPraise4, title: 'John & Doe', description: "We are absolutely thrilled with Meet’s work. He didn’t just take photos; he captured the true essence, atmosphere and vibe of each moment, seamlessly blending with the surroundings. The photos are timeless because instead of following fleeting trends, he focused on what will remain meaningful and relevant over time. He also guided us throughout the process, offering helpful suggestions tailored to the location, timing, and the specific shot we wanted." },
  ];

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
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" aria-hidden="true" data-slot="icon">
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
                <Link to="/" className='text-white lg:text-[26px] text-[20px] operetta-light'>Home of visuals</Link>
              </div>
              <div className={`md:w-fit w-full ${showMobileNav ? "md:mt-0 mt-10" : "md:flex hidden"}`}>
                <div className="flex md:flex-row flex-col lg:space-x-10 space-x-1 lg:text-[18px] text-[14px] lg:tracking-[1px] tracking-none font-normal">
                  <Link to="/hov" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)} aria-current="page">Home</Link>
                  <Link to="/aboutus" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>About</Link>
                  <Link to="/tasveers" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Tasveers</Link>
                  <Link to="/gaathas" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Gaathas</Link>
                  <Link to="/blogs" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Blogs</Link>
                  <Link to="/contactus" className="px-3 md:py-2 py-4 text-white md:w-fit w-full md:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Lock Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <main>
        <section>
          <div className="w-full h-[100vh] bg-[#D9D9D9] text-center flex items-center justify-center flex-col text-white relative overflow-hidden">
            <video src={videos.homeHeaderVideo} autoPlay muted loop className='h-[100vh] w-full object-cover object-center'></video>
            <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 absolute operetta'>Raw. Poetic. Eternal</h1>
          </div>
        </section>

        <section>
          <div className="text-center max-w-[680px] mx-auto px-5 py-15 mb-10">
            <h2 className='text-[16px] leading-30 mb-6 uppercase tracking-[5px] inter-light'>Our mission</h2>
            <h3 className='lg:text-[45px] md:text-[35px] text-[30px] lg:leading-22 leading-14 font-light operetta'>When the <span className='block italic'>Guests Leave,</span> Your Story Stays</h3>

            <div className="flex justify-center items-center my-10">
              <div className="h-[100px] w-[150px]">
                <img src={images.logo} alt="" className='object-cover object-center' loading="lazy" />
              </div>
            </div>

            <p className='text-[18px] leading-11 mb-7 font-light'>Picture this - it's the day after your wedding day. The guests have left, the flowers have dried, and the cake is long gone. The only thing that remains after your special day is your photos. The truth is that it's not every day you get to live through a milestone that shapes the rest of your life. So, amidst all your wedding frenzy to have that one perfect moment, why don't we handle the everlasting memory? You live the moment, and we will capture every minute part of it - down to the last detail, hue, texture, and pixel.</p>
            <p className='text-[18px] leading-11 font-light'>It's your date; we just help you save it for life.</p>
          </div>
        </section>

        <section>
          <div className={`flex mb-24 h-[500px] bg-cover bg-center h-screen w-full bg-fixed`} style={{ backgroundImage: `url(${images.homepageSticky})` }}></div>
        </section>

        <section>
          <div className="flex flex-col justify-center items-center py-10 px-5 lg:mb-20 mb-16">
            <h2 className='lg:text-[80px] md:text-[70px] text-[50px] lg:leading-40 md:leading-30 leading-20 lg:-mb-10 sm:-mb-10 -mb-5 text-center font-light operetta-light'><i>Client</i> PRAISE</h2>

            <div className='flex max-w-[753px] w-full mx-auto justify-center text-center relative'>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 500000,
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
                      <div className="bg-[#d9d9d9] w-[200px]">
                        <img src={slide.image1} alt="" className='bg-[#D9D9D9] w-full sm:h-[300px] h-[200px] object-cover object-center' loading="lazy" />
                      </div>
                      <div className="bg-[#d9d9d9] w-[200px]">
                        <img src={slide.image2} alt="" className='bg-[#D9D9D9] w-full sm:h-[300px] h-[200px] object-cover object-center' loading="lazy" />
                      </div>
                    </div>

                    <h3 className='lg:text-[30px] text-[24px] lg:leading-17 leading-10 Capitalize mt-14 mb-6 operetta hidden'>{slide.title}</h3>

                    <p className='text-[18px] leading-11 font-light max-w-[753px] text-center mt-10'>{slide.description}</p>
                  </SwiperSlide>
                ))}
                <div className="md:text-[18px] text-[16px] lg:leading-17 leading-12 uppercase !flex justify-center mb-20 gap-5">
                  <span className="swiper-button-prev !z-9 !relative !w-fit !h-[30px] !-mt-[25px] !text-black cursor-pointer flex items-center justify-center hover:italic">Previous</span>
                  <span className='!z-9 !relative !w-fit !h-[30px] !-mt-[25px] !text-black cursor-pointer flex items-center justify-center'>/</span>
                  <span className="swiper-button-next !z-9 !relative !w-fit !h-[30px] !-mt-[25px] !text-black cursor-pointer flex items-center justify-center hover:italic">Next</span>
                </div>
                {/* <div className="lg:text-[26px] md:text-[20px] text-[16px] lg:leading-17 leading-12 uppercase relative !flex items-center justify-center h-[50px] !z-99999">
                <span className="swiper-button-prev text-black !relative !h-[30px] !w-[100px] !-mt-13 !z-99999">Previous</span>
                <span className='!relative !h-[30px] !w-[100px] text-green !-mt-13 !z-99999'>/</span>
                <span className="swiper-button-next text-black !relative !h-[30px] !w-[100px] !-mt-13 !z-99999">Next</span>
              </div> */}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home