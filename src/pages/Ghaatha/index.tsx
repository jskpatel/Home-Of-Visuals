import React, { useEffect, useState } from 'react'
import { RiPlayLargeFill } from 'react-icons/ri'
import { videos } from '../../assets/videos/video';
import ReactPlayer from 'react-player';

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
          <video src={videos.gaathaHeaderVideo} autoPlay muted loop className='h-full w-full object-cover object-center absolute'></video>
          {/* <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 operetta'>Gaatha</h1> */}
          <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>Gaatha</h1>
        </div>
      </section>

      <section>
        <div className='bg-[#dfc1b1] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>

          <div className="bg-[#fff] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-fit max-w-[1200px] mx-auto" >
            <h2 className='uppercase lg:text-[30px] text-[26px] lg:leading-18 leading-14 text-center lg:mb-4 mb-1 operetta'>TIMELESS FILMS FOR IMMORTAL EMOTIONS</h2>

            <div className="flex flex-wrap md:gap-x-[4%] gap-y-15 w-fit" >

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/l2yeP2M1yAM/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/l2yeP2M1yAM')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/N5rBCoFOYvc/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/N5rBCoFOYvc')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/G13mr8XgDGE/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/G13mr8XgDGE')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/U0Mn2YN1L2M/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/U0Mn2YN1L2M')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/9I6mNNFP5rU/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/9I6mNNFP5rU')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/6OvbfNdouno/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://youtube.com/embed/6OvbfNdouno')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

              <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                <img src="https://img.youtube.com/vi/fXyjH5js-no/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" />
                <span
                  className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                  onClick={() => handlePlayClick('https://www.youtube.com/embed/fXyjH5js-no')}
                >
                  <RiPlayLargeFill />
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {isModalOpen && videoSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 bg-black/90">
          <div className="relative xl:w-[992px] md:w-[700px] w-full p-4 rounded-xl">
            <button
              onClick={closeModal}
              className="absolute xl:-top-1 top-0 xl:-right-8 right-0 text-xl bg-white w-[30px] h-[30px] bg-white text-black rounded-md shadow-lg z-1 cursor-pointer opacity-80 hover:opacity-100"
            >
              ✕
            </button>
            {/* <iframe
              className="xl:w-[992px] md:w-[700px] w-full xl:h-[550px] md:h-[408px] h-[250px]"
              src={`${videoSrc}?controls=1&autoplay=1&mute=0&modestbranding=1&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe> */}

            <ReactPlayer
              url={videoSrc}
              playing
              muted
              controls
              className="!xl:w-[992px] !md:w-[700px] !w-full !xl:h-[650px] !md:h-[408px] h-[250px]"
            />

          </div>
        </div>
      )}
    </main>
  )
}

export default Ghaatha