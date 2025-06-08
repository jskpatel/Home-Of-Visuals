import React, { useEffect, useRef, useState } from 'react'
import { audio } from '../../assets/images'
import { useLocation } from 'react-router-dom'
import { TasveerCouple, tasveerImages } from '../Tasveer/constant'

const Couple: React.FC = () => {

  const location = useLocation()
  const coupleImgs: TasveerCouple[] = tasveerImages.filter(x => x.key === location.state.name)

  const [couple] = useState<TasveerCouple | undefined>(coupleImgs[0])

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay failed: ', error)
      })
    }
  }, [])

  return (
    <main>
      <section className="bg-[#dfc1b1]">
        <div className=" h-full min-h-[100vh] lg:px-25 px-12 lg:pt-48 pt-24 pb-24 flex flex-col gap-10">
          <div >
            <img src={couple?.coverImage} alt="Tasveer" className='bg-[#ededed] lg:max-w-[940px] lg:h-[600px] w-full h-[400px] object-cover object-center mx-auto' />
          </div>

          <h2 className="lg:text-[40px] text-[30px] lg:leading-16 leading-14 text-center uppercase mt-14 operetta">{couple?.name1} & {couple?.name2}</h2>
          <p className='text-[18px] leading-11 font-light text-center lg:w-[940px] max-w-[600px] w-full mx-auto'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>

          <div className="flex w-full max-w-[940px] mx-auto bg-white rounded-[30px] h-auto my-10">
            <audio ref={audioRef} controls autoPlay className='w-full h-[30px]'>
              <source src={audio?.couple} type="audio/mpeg" />
            </audio>
          </div>
        </div>

        {/* <div className='bg-[#dfc1b1] flex flex-col md:gap-3 gap-5 pb-30 lg:max-w-[940px] mx-auto'>
          <div>
            <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#ededed] w-full h-[100vh] object-cover object-center mx-auto' />
          </div>

          <div className='flex flex-1 md:gap-3 gap-5 md:justify-between md:flex-row flex-col w-full'>
            <img src={images.tasveerThumb_6} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            <img src={images.tasveerThumb_4} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
          </div>
        </div> */}

        <div className='bg-[#dfc1b1] flex flex-col gap-5 pb-30 lg:max-w-[940px] mx-auto'>
          {couple?.images?.map((img, index) => {
            const filename = img.split('/').pop()?.split('.')[0] || '';
            const lastChar = filename.charAt(filename.length - 1);
            const isLettered = /[a-zA-Z]/.test(lastChar);
            const isStartOfPair = isLettered && (lastChar === 'a');

            if (!isLettered) {
              // Full width image
              return (
                <div key={index}>
                  <img src={img} alt="Tasveer" className='bg-[#ededed] w-full h-[100vh] object-cover object-center mx-auto' />
                </div>
              );
            } else if (isStartOfPair && couple?.images[index + 1]) {
              // Paired images (a + b)
              return (
                <div key={index} className='flex flex-1 gap-5 justify-between w-full'>
                  <img src={couple?.images[index]} alt="Tasveer" className='bg-[#ededed] w-1/2 h-[100vh] object-cover object-center mx-auto' />
                  <img src={couple?.images[index + 1]} alt="Tasveer" className='bg-[#ededed] w-1/2 h-[100vh] object-cover object-center mx-auto' />
                </div>
              );
            } else if (lastChar === 'b') {
              // Skip b image if already rendered with a
              return null;
            }
          })}
        </div>

      </section>
    </main>
  )
}

export default Couple