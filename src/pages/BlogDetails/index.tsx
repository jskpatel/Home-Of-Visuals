import React from 'react'
import { images } from '../../assets/images'

const BlogDetails: React.FC = () => {
  return (
    <main>
      <div className='bg-[#EECACA] lg:px-25 px-12 lg:pt-48 pt-24 pb-24'>
        <div className="bg-white md:rounded-[50px] rounded-[20px] md:px-16 px-8 md:py-34 py-10 flex justify-center items-center lg:gap-x-4 gap-x-10 gap-y-20 w-full max-w-[1262px] mx-auto">
          <div className='flex flex-wrap justify-between gap-10 w-full max-w-[1100px]'>

            <h2 className='xl:text-[70px] lg:text-[50px] md:text-[36px] text-[24px] xl:leading-30 lg:leading-24 md:leading-18 leading-12 text-center w-full mb-20'>MIRAL & BHARGAV </h2>
            <p className='lg:text-[24px] text-[16px] lg:leading-16 leading-12 lg:mb-10 mb-0 text-center font-normal'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list.</p>

            <div className="flex lg:gap-24 gap-14 justify-center items-center my-20 w-full">
              <span className="w-[611px]">
                <img src={images.blog_1} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[631px] object-cover object-center' />
              </span>
            </div>

            <p className="lg:text-[24px] text-[16px] lg:leading-16 leading-12 lg:mb-10 mb-0 text-center font-normal">Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list. Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list. Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list. Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list.</p>

            <div className="flex flex-wrap gap-8 justify-center items-center my-20 w-full">
              <span className="w-[350px]">
                <img src={images.blog_1} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[418px] object-cover object-center' />
              </span>
              <span className="w-[350px]">
                <img src={images.blog_2} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[418px] object-cover object-center' />
              </span>
              <span className="w-[350px]">
                <img src={images.blog_3} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[418px] object-cover object-center' />
              </span>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogDetails