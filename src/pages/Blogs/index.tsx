import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'

const BlogList: React.FC = () => {
  return (
    <main>
      <section>
        <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
          <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center absolute opacity-50 grayscale' />
          <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>blogs</h1>
        </div>
      </section>

      <section>
        <div className='bg-[#fff] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24 text-white'>
          <div className="bg-[#dfc1b1] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-fit max-w-[1024px] mx-auto" >
            <div className="flex flex-wrap justify-center lg:gap-x-35 gap-x-10 w-fit" >

              <div className="flex flex-col max-w-[700px] py-10" >
                <h2 className='text-[22px] leading-12 mb-5 operetta text-center'>01. TIPS FOR YOUR BIG DAY.</h2>
                <p className='text-[16px] leading-11 mb-10 font-light'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved....</p>

                <div className="flex">
                  <img src={images.blog_1} alt="" className='w-full mx-auto lg:h-[350px] h-[250px] object-cover object-center' />
                </div>
                <Link to="/blogs/1" className='uppercase text-[15px] mt-4 font-light'>read more</Link>
              </div>

              <div className="flex flex-col max-w-[700px] py-10" >
                <h2 className='text-[22px] leading-12 mb-5 operetta text-center'>02. TIPS FOR YOUR BIG DAY.</h2>
                <p className='text-[16px] leading-11 mb-10 font-light'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved....</p>

                <div className="flex">
                  <img src={images.blog_2} alt="" className='w-full mx-auto lg:h-[350px] h-[250px] object-cover object-center' />
                </div>
                <Link to="/blogs/1" className='uppercase text-[15px] mt-4 font-light'>read more</Link>
              </div>

              <div className="flex flex-col max-w-[700px] py-10" >
                <h2 className='text-[22px] leading-12 mb-5 operetta text-center'>03. TIPS FOR YOUR BIG DAY.</h2>
                <p className='text-[16px] leading-11 mb-10 font-light'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved....</p>

                <div className="flex">
                  <img src={images.blog_3} alt="" className='w-full mx-auto lg:h-[350px] h-[250px] object-cover object-center' />
                </div>
                <Link to="/blogs/1" className='uppercase text-[15px] mt-4 font-light'>read more</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogList