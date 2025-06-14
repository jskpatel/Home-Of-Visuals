import React, { useState } from 'react'
import { tasveerImages } from '../Tasveer/constant'
import { Link } from 'react-router-dom'

const ParthZeel: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)
  const [parthZeel] = useState(tasveerImages[2])

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

      <main>
        <section className="bg-[#dfc1b1]">
          <div className=" h-full lg:px-25 px-8 lg:pt-48 md:pt-36 pt-24 pb-24 flex flex-col gap-10">
            <div >
              <img src={parthZeel?.coverImage} alt="Tasveer" className='bg-[#ededed] lg:max-w-[1240px] w-full lg:h-[700px] h-[400px] object-cover object-center mx-auto' loading="lazy" />
            </div>

            <h2 className="lg:text-[40px] text-[22px] lg:leading-16 leading-14 text-center uppercase mt-14 operetta">{parthZeel?.name1} & {parthZeel?.name2}</h2>
            <p className='text-[18px] leading-11 font-light text-center lg:w-[940px] max-w-[600px] w-full mx-auto'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>

            {/* <div className="flex w-full max-w-[940px] mx-auto bg-white rounded-[30px] h-auto my-10">
              <audio ref={audioRef} controls autoPlay className='w-full h-[30px]'>
                <source src={audio?.couple} type="audio/mpeg" />
              </audio>
            </div> */}
          </div>

          <div className='bg-[#dfc1b1] flex flex-col md:gap-3 gap-5 pb-30 lg:max-w-[1240px] mx-auto px-8'>
            <div>
              <img src={parthZeel?.images[0]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[1]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[2]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[3]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[4]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[5]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[6]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[7]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[8]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[9]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[10]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[11]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[12]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[13]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[14]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[15]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[16]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[17]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[18]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[19]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[20]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[21]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[22]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[23]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[24]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[25]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[26]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[27]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[28]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[29]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[30]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[31]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[32]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[33]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[34]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[35]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[36]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[37]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[38]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[39]} alt="Tasveer" className='bg-[#ededed] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[40]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[41]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[42]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[43]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[44]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[45]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[46]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[47]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[48]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[49]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[50]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[51]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[52]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[53]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[54]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[55]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[56]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[57]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[58]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[59]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[60]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[61]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[62]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[63]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[64]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[65]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[66]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[67]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[68]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[69]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[70]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[71]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[72]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div>
              <img src={parthZeel?.images[73]} alt="Tasveer" className='bg-[#ededed] w-full h-auto object-cover object-center mx-auto' />
            </div>
            <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
              <img src={parthZeel?.images[74]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
              <img src={parthZeel?.images[75]} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            </div>
          </div>

          <div className='bg-[#dfc1b1] flex justify-center item-center gap-5 pb-30 lg:max-w-[1240px] mx-auto px-8 md:text-[18px] text-[16px] lg:leading-17 leading-12 uppercase'>
            <Link to="/tasveers/akhil-athira" className='w-fit h-[30px] text-black cursor-pointer flex items-center justify-center hover:italic'>Previous</Link>
            <span className='w-fit h-[30px] flex items-center justify-center'> / </span>
            <Link to="/tasveers/miral-bhargav" className='w-fit h-[30px] text-black cursor-pointer flex items-center justify-center hover:italic'>Next</Link>
          </div>

        </section>
      </main>
    </>
  )
}

export default ParthZeel