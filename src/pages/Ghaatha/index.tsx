import React, { useEffect, useState } from 'react'
import { RiPlayLargeFill } from 'react-icons/ri'
import { images } from '../../assets/images'

const Ghaatha: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handlePlayClick = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoSrc(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <main>
      <section>
        <div className="w-full h-[85vh] min-h-[400px] bg-[#D9D9D9] text-center flex items-center justify-center flex-col text-white relative overflow-hidden">
          <video src="http://homeofvisuals.in/assets/common/gaathaMain.mp4" autoPlay muted loop className='h-full w-full object-cover object-center absolute'></video>
          {/* <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1'>Gaatha</h1> */}
        </div>
      </section>

      <section>
        <div className='bg-[#EECACA] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>

          <div className="bg-[#fff] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-fit max-w-[1200px] mx-auto" >
            <h2 className='uppercase lg:text-[36px] text-[26px] lg:leading-20 leading-14 text-center lg:mb-14 mb-1'>TIMELESS FILMS FOR IMMORTAL EMOTIONS</h2>

            <div className="flex flex-wrap justify-center lg:gap-x-15 gap-x-10 gap-y-15 w-fit" >

              <div className='lg:w-[490px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src={images.kohli} alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://www.youtube.com/embed/9xwazD5SyVg')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='lg:w-[490px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src={images.bumrah} alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://www.youtube.com/embed/9xwazD5SyVg')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='lg:w-[490px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src={images.kohli} alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://www.youtube.com/embed/9xwazD5SyVg')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='lg:w-[490px] md:w-[340px] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src={images.bumrah} alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://www.youtube.com/embed/9xwazD5SyVg')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black/90">
          <div className="relative xl:w-[992px] md:w-[700px] w-full p-4 rounded-xl">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-xl bg-white w-[30px] h-[30px] bg-white text-black rounded-md shadow-lg z-1 cursor-pointer opacity-80 hover:opacity-100"
            >
              ✕
            </button>
            <iframe
              className="xl:w-[992px] md:w-[700px] w-full xl:h-[550px] md:h-[408px] h-[250px]"
              src={`${videoSrc!}?controls=1&autoplay=1&mute=0&modestbranding=1&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  )
}

export default Ghaatha