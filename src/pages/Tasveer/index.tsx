import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { MdArrowRightAlt } from 'react-icons/md'

const Tasveer: React.FC = () => {
  return (
    <main>
      <section>
        <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
          <img src={images.tasveerHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute opacity-90 grayscale' />
          <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative'>Tasveer</h1>
        </div>
      </section>

      <section>
        <div className='bg-[#EECACA] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>

          <div className="bg-[#fff] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-fit max-w-[1200px] mx-auto" >
            <h2 className='uppercase lg:text-[36px] text-[26px] lg:leading-20 leading-14 text-center lg:mb-14 mb-1'>RAW EMOTIONS AND TIMELESS TALES</h2>

            <div className="flex flex-wrap justify-center lg:gap-x-35 gap-x-10 gap-y-24 w-fit" >
              <div className='lg:w-[300px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5'>
                <div className='w-full bg-white'>
                  <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' />
                </div>
                <span className='lg:text-[20px] text-[16px] leading-10 capitalize'>Miral & Bhargav</span>
                <p className='text-[15px] leading-9'>Others who use this device won'This you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>
                <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link>
              </div>
              <div className='lg:w-[300px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5'>
                <div className='w-full bg-white'>
                  <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' />
                </div>
                <span className='lg:text-[20px] text-[16px] leading-10 capitalize'>Miral & Bhargav</span>
                <p className='text-[15px] leading-9'>Others who use this device won'websites that you visit and the  Google. Downloads, bookmarks and reading list items will be saved.</p>
                <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link>
              </div>
              <div className='lg:w-[300px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5'>
                <div className='w-full bg-white'>
                  <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' />
                </div>
                <span className='lg:text-[20px] text-[16px] leading-10 capitalize'>Miral & Bhargav</span>
                <p className='text-[15px] leading-9'>So you can browse more privately. Downloads, bookmarks and reading list items will be saved.</p>
                <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link>
              </div>
              <div className='lg:w-[300px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5'>
                <div className='w-full bg-white'>
                  <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' />
                </div>
                <span className='lg:text-[20px] text-[16px] leading-10 capitalize'>Miral & Bhargav</span>
                <p className='text-[15px] leading-9'>How data is collected by websites that Downloads, bookmarks and reading list items will be saved.</p>
                <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link>
              </div>
              <div className='lg:w-[300px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5'>
                <div className='w-full bg-white'>
                  <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' />
                </div>
                <span className='lg:text-[20px] text-[16px] leading-10 capitalize'>Miral & Bhargav</span>
                <p className='text-[15px] leading-9'>Others who use this device won'This won't change how data is collected by. Downloads, bookmarks and reading list items will be saved.</p>
                <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tasveer