import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { blog01Images, blogDetails } from '../Tasveer/constant'

const BlogList: React.FC = () => {

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
            <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute opacity-50 grayscale1' loading="lazy" />
            <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>blogs</h1>
          </div>
        </section>

        <section>
          <div className='bg-[#dfc1b1] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>
            <div className="bg-[#fff] lg:rounded-[50px] md:rounded-[20px] rounded-[10px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-full max-w-[1200px] mx-auto" >
              <div className="flex flex-wrap justify-center lg:gap-x-35 gap-x-10 w-full" >

                {
                  blogDetails.map((blog, i: number) => {
                    return (
                      <div className="flex flex-col max-w-[1080px] py-10" key={i} >
                        <h2 className='md:text-[26px] text-[18px] leading-12 mb-5 operetta text-center'>{i + 1}. {blog.title}</h2>
                        <div className='text-[16px] leading-11 mb-10 font-light' dangerouslySetInnerHTML={{ __html: blog.text1 }} />

                        <div className="flex">
                          <img src={blog01Images[5]} alt="" className='w-full mx-auto lg:h-[450px] h-[250px] object-cover object-center' loading="lazy" />
                        </div>
                        <Link to="/blogs/1" state={{ blogKey: blog.key }} className='uppercase text-[15px] mt-4 font-light'>read more</Link>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BlogList