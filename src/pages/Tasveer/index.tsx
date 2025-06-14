import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { tasveerImages } from './constant'

const Tasveer: React.FC = () => {

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
                <Link to="/" className={`text-white lg:text-[26px] text-[20px] operetta-light`}>Home of visuals</Link>
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
          <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
            <img src={images.tasveerHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-bottom absolute opacity-90 grayscale1' loading="lazy" />
            <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>Tasveers</h1>
          </div>
        </section>

        <section>
          <div className='bg-[#dfc1b1] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>
            <div className="bg-[#fff] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-14 w-fit max-w-[1200px] mx-auto" >
              <h2 className='uppercase lg:text-[30px] text-[26px] lg:leading-18 leading-14 text-center lg:mb-14 mb-1 operetta'>RAW EMOTIONS AND TIMELESS TALES</h2>

              <div className="flex flex-wrap gap-x-[5%] gap-y-24 w-fit" >
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/hetal-neel"><img src={tasveerImages[0]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/hetal-neel" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[0]?.name1} & {tasveerImages[0]?.name2}</Link>
                </div>
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/akhil-athira"><img src={tasveerImages[1]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/akhil-athira" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[1]?.name1} & {tasveerImages[1]?.name2}</Link>
                </div>
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/parth-zeel"><img src={tasveerImages[2]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/parth-zeel" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[2]?.name1} & {tasveerImages[2]?.name2}</Link>
                </div>
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/miral-bhargav"><img src={tasveerImages[3]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/miral-bhargav" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[3]?.name1} & {tasveerImages[3]?.name2}</Link>
                </div>
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/tejal-varun"><img src={tasveerImages[4]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/tejal-varun" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[4]?.name1} & {tasveerImages[4]?.name2}</Link>
                </div>
                <div className='md:w-[30%] w-full flex flex-col gap-3'>
                  <div className='w-full bg-white'>
                    <Link to="/tasveers/anjali-savan"><img src={tasveerImages[5]?.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                  </div>
                  <Link to="/tasveers/anjali-savan" className='text-[18px] leading-9 capitalize operetta mt-2'>{tasveerImages[5]?.name1} & {tasveerImages[5]?.name2}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Tasveer