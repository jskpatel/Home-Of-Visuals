import React, { useState } from 'react'
import { blogDetails } from '../Tasveer/constant'
import { Link, useLocation } from 'react-router-dom'

const BlogDetails: React.FC = () => {

  const location = useLocation();
  const activeBlog = blogDetails.filter(x => x.key === location.state?.blogKey)
  const [blog] = useState(activeBlog[0])

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

      <main>
        <div className='bg-white lg:px-25 px-12 lg:pt-48 pt-24 pb-24'>
          <div className="bg-[#dfc1b1] md:rounded-[50px] rounded-[20px] md:px-16 px-8 md:py-34 py-10 flex justify-center items-center lg:gap-x-4 gap-x-10 gap-y-20 w-full max-w-[1262px] mx-auto">
            <div className='flex flex-wrap justify-between gap-10 w-full max-w-[820px]'>

              <h2 className='xl:text-[30px] lg:text-[26px] md:text-[22px] text-[20px] xl:leading-30 lg:leading-24 md:leading-18 leading-12 text-center w-full mb-10 operetta'>THE MOST AUTHENTIC GUESTS AT WEDDING</h2>
              <p className='text-[18px] leading-11 text-center font-light' dangerouslySetInnerHTML={{ __html: blog.text1 }} />

              <div className="flex lg:gap-24 gap-14 justify-center items-center my-10 w-full">
                <span className="max-w-[768px]">
                  <img src={blog.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[631px] object-cover object-center' loading="lazy" />
                </span>
              </div>

              <p className="text-[18px] leading-13 text-center font-light" dangerouslySetInnerHTML={{ __html: blog.text2 }} />

              <div className="flex flex-wrap gap-8 justify-center items-center my-10 w-full">
                {
                  blog.images.map((blg: string, i: number) => {
                    return <span className="w-[260px]" key={i}>
                      <img src={blg} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[310px] object-cover object-center' loading="lazy" />
                    </span>
                  })
                }
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogDetails