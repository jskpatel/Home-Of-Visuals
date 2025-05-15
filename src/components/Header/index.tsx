import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <>
      <nav className="fixed w-full z-4">
        <div className="w-full px-2 sm:px-6 lg:px-8 py-4">
          <div className="relative flex sm:items-center sm:justify-between">

            <div className="absolute right-5 flex md:hidden top-0">
              <button
                type="button"
                className="top-px relative inline-flex items-center justify-center p-2 text-[#EECACA] text-[34px] cursor-pointer scale-[2.5]"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex sm:flex-row flex-col sm:items-center justify-between w-full uppercase">
              <div className={`flex shrink-0 sm:items-center ml-3 ${showMobileNav ? 'mb-5' : 'mb-0'}`}>
                <Link to="/" className='text-white font-bold lg:text-[26px] text-[20px] inter-light'>Home of visuals</Link>
              </div>
              <div className={`sm:w-fit w-full ${showMobileNav ? "" : "md:flex hidden"}`}>
                <div className="flex sm:flex-row flex-col lg:space-x-4 space-x-1 xl:text-[24px] lg:text-[20px] text-[16px] lg:tracking-[1px] tracking-none lg:font-semibold  font-normal">
                  <Link to="/hov" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light font-bold" onClick={() => setShowMobileNav(false)} aria-current="page">Home</Link>
                  <Link to="/aboutus" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>About</Link>
                  <Link to="/tasveers" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Tasveers</Link>
                  <Link to="/gaathas" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Gaathas</Link>
                  <Link to="/blogs" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Blogs</Link>
                  <Link to="/contactus" className="px-3 sm:py-2 py-4 text-white sm:w-fit w-full sm:text-center text-left inter-light" onClick={() => setShowMobileNav(false)}>Book Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header