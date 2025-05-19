import React, { useEffect, useRef } from 'react'
import { audio, images } from '../../assets/images'

const Couple: React.FC = () => {

  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  useEffect(() => {
    if(audioRef.current){
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
            <img src={images.tasveerThumb_5} alt="Tasveer" className='bg-[#ededed] lg:max-w-[940px] lg:h-[600px] w-full h-[400px] object-cover object-center mx-auto' />
          </div>

          <h2 className="lg:text-[40px] text-[30px] lg:leading-16 leading-14 mb-8 text-center uppercase mt-24 operetta">Miral & bhargav</h2>
          <p className='text-[18px] leading-11 font-light text-center lg:w-[940px] max-w-[600px] w-full mx-auto'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved.</p>

          <div className="flex w-full max-w-[940px] mx-auto bg-white rounded-[30px] h-auto my-20">
            <audio ref={audioRef} controls autoPlay className='w-full h-[30px]'>
              <source src={audio?.couple} type="audio/mpeg" />
            </audio>
          </div>
        </div>

        <div className='bg-[#dfc1b1] flex flex-col gap-3 pb-30 lg:max-w-[940px] mx-auto'>
          <div>
            <img src={images.tasveerThumb_1} alt="Tasveer" className='bg-[#ededed] w-full h-[100vh] object-cover object-center mx-auto' />
          </div>

          <div className='flex flex-1 gap-3 md:justify-between md:flex-row flex-col w-full'>
            <img src={images.tasveerThumb_6} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
            <img src={images.tasveerThumb_4} alt="Tasveer" className='bg-[#ededed] md:w-[49.5%] w-full h-[100vh] object-cover object-center mx-auto' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Couple