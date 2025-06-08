import React, { useState } from 'react'
import { blogDetails } from '../Tasveer/constant'
import { useLocation } from 'react-router-dom'

const BlogDetails: React.FC = () => {

  const location = useLocation();
  const activeBlog = blogDetails.filter( x => x.key === location.state?.blogKey)

  const [ blog ] = useState(activeBlog[0])

  return (
    <main>
      <div className='bg-[#dfc1b1] lg:px-25 px-12 lg:pt-48 pt-24 pb-24'>
        <div className="bg-white md:rounded-[50px] rounded-[20px] md:px-16 px-8 md:py-34 py-10 flex justify-center items-center lg:gap-x-4 gap-x-10 gap-y-20 w-full max-w-[1262px] mx-auto">
          <div className='flex flex-wrap justify-between gap-10 w-full max-w-[820px]'>

            <h2 className='xl:text-[50px] lg:text-[40px] md:text-[30px] text-[24px] xl:leading-30 lg:leading-24 md:leading-18 leading-12 text-center w-full mb-10 operetta'>MIRAL & BHARGAV </h2>
            <p className='text-[18px] leading-11 text-center font-light' dangerouslySetInnerHTML={{__html: blog.text1}} />

            <div className="flex lg:gap-24 gap-14 justify-center items-center my-10 w-full">
              <span className="w-[611px]">
                <img src={blog.coverImage} alt="Tasveer" className='bg-[#D9D9D9] w-full h-[631px] object-cover object-center' loading="lazy" />
              </span>
            </div>

            <p className="text-[18px] leading-13 text-center font-light" dangerouslySetInnerHTML={{__html: blog.text2}} />

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
  )
}

export default BlogDetails