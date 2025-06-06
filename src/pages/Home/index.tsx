import React from 'react'
import { images } from '../../assets/images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { videos } from '../../assets/videos/video';

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
          <video src={videos.homeHeaderVideo} autoPlay muted loop className='h-[100vh] w-full object-cover object-center'></video>
          <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 absolute operetta'>Raw. Poetic. Eternal</h1>
        </div>
      </section>

      <section>
        <div className="text-center max-w-[680px] mx-auto px-5 py-15 mb-10" >
          <h2 className='text-[16px] leading-30 mb-6 uppercase tracking-[5px] inter-light'>Our mission</h2>
          <h3 className='lg:text-[45px] md:text-[35px] text-[30px] lg:leading-22 leading-14 font-light operetta'>When the <span className='block italic'>Guests Leave,</span> Your Story Stays</h3>

          <div className="flex justify-center items-center my-10">
            <div className="h-[100px] w-[150px]">
              <img src={images.logo} alt="" className='object-cover object-center' />
            </div>
          </div>

          <p className='text-[18px] leading-11 mb-7 font-light'>Picture this - it's the day after your wedding day. The guests have left, the flowers have dried, and the cake is long gone. The only thing that remains after your special day is your photos. The truth is that it's not every day you get to live through a milestone that shapes the rest of your life. So, amidst all your wedding frenzy to have that one perfect moment, why don't we handle the everlasting memory? You live the moment, and we will capture every minute part of it - down to the last detail, hue, texture, and pixel.</p>
          <p className='text-[18px] leading-11 font-light'>It's your date; we just help you save it for life.</p>
        </div>
      </section>

      <section>
        <div className={`flex mb-24 h-[500px] bg-cover bg-center h-screen w-full bg-fixed`} style={{ backgroundImage: `url(${images.homepageSticky})` }} ></div>
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
                      <img src={slide.image1} alt="" className='bg-[#D9D9D9] w-full sm:h-[300px] h-[200px] object-cover object-center' />
                    </div>
                    <div className="bg-[#d9d9d9] w-[200px]">
                      <img src={slide.image2} alt="" className='bg-[#D9D9D9] w-full sm:h-[300px] h-[200px] object-cover object-center' />
                    </div>
                  </div>

                  <h3 className='lg:text-[30px] text-[24px] lg:leading-17 leading-10 Capitalize mt-14 mb-6 operetta'>{slide.title}</h3>

                  <p className='text-[18px] leading-11 font-light max-w-[753px] text-center'>{slide.description}</p>
                </SwiperSlide>
              ))}
              <div
                className="md:text-[18px] text-[16px] lg:leading-17 leading-12 uppercase !flex justify-center mb-20 gap-5"
              // style={{}}
              >
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
      </section >
    </main >
  )
}

export default Home