import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
// import { MdArrowRightAlt } from 'react-icons/md'

const Tasveer: React.FC = () => {
  return (
    <main>
      <section>
        <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
          <img src={images.tasveerHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute opacity-90 grayscale' />
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
                  <Link to="/tasveers/couple"><img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                </div>
                <Link to="/tasveers/couple" className='text-[18px] leading-9 capitalize operetta mt-2'>Miral & Bhargav</Link>
                {/* <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link> */}
              </div>
              <div className='md:w-[30%] w-full flex flex-col gap-3'>
                <div className='w-full bg-white'>
                  <Link to="/tasveers/couple"><img src={images.tasveerThumb_2} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                </div>
                <Link to="/tasveers/couple" className='text-[18px] leading-9 capitalize operetta mt-2'>Miral & Bhargav</Link>
                {/* <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link> */}
              </div>
              <div className='md:w-[30%] w-full flex flex-col gap-3'>
                <div className='w-full bg-white'>
                  <Link to="/tasveers/couple"><img src={images.tasveerThumb_3} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                </div>
                <Link to="/tasveers/couple" className='text-[18px] leading-9 capitalize operetta mt-2'>Miral & Bhargav</Link>
                {/* <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link> */}
              </div>
              <div className='md:w-[30%] w-full flex flex-col gap-3'>
                <div className='w-full bg-white'>
                  <Link to="/tasveers/couple"><img src={images.tasveerThumb_4} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                </div>
                <Link to="/tasveers/couple" className='text-[18px] leading-9 capitalize operetta mt-2'>Miral & Bhargav</Link>
                {/* <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link> */}
              </div>
              <div className='md:w-[30%] w-full flex flex-col gap-3'>
                <div className='w-full bg-white'>
                  <Link to="/tasveers/couple"><img src={images.tasveerThumb_5} alt="Tasveer" className='bg-[#D9D9D9] w-full md:h-[376px] h-[80vh] object-cover object-center' /></Link>
                </div>
                <Link to="/tasveers/couple" className='text-[18px] leading-9 capitalize operetta mt-2'>Miral & Bhargav</Link>
                {/* <Link to="/tasveers/couple" className='text-[14px] leading-8 flex gap-1 items-center'>Read More <MdArrowRightAlt className='text-[24px]' /></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tasveer