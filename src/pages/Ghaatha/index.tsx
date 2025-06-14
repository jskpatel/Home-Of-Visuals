import React, { useEffect, useState } from 'react'
import { RiPlayLargeFill } from 'react-icons/ri'
import { videos } from '../../assets/videos/video';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const Ghaatha: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)
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
          <div className="w-full h-[85vh] min-h-[400px] bg-[#D9D9D9] text-center flex items-center justify-center flex-col text-white relative overflow-hidden">
            <video src={videos.gaathaHeaderVideo} autoPlay muted loop className='h-full w-full object-cover object-center absolute'></video>
            <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>Gaathas</h1>
          </div>
        </section>

        <section>
          <div className='bg-[#dfc1b1] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24'>

            <div className="bg-[#fff] md:rounded-[50px] rounded-[20px] lg:px-24 px-5 lg:py-24 py-14 flex flex-wrap justify-center items-center lg:gap-x-40 gap-x-20 gap-y-24 w-fit max-w-[1200px] mx-auto" >
              <h2 className='uppercase lg:text-[30px] text-[22px] lg:leading-18 leading-14 text-center lg:mb-4 mb-1 operetta'>TIMELESS FILMS FOR IMMORTAL EMOTIONS</h2>

              <div className="flex flex-wrap md:gap-x-[4%] gap-y-15 w-fit" >

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/fXyjH5js-no/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://www.youtube.com/embed/fXyjH5js-no')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/l2yeP2M1yAM/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/l2yeP2M1yAM')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/N5rBCoFOYvc/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/N5rBCoFOYvc')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/G13mr8XgDGE/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/G13mr8XgDGE')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/U0Mn2YN1L2M/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/U0Mn2YN1L2M')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/9I6mNNFP5rU/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/9I6mNNFP5rU')}
                  >
                    <RiPlayLargeFill />
                  </span>
                </div>

                <div className='md:w-[48%] w-full flex flex-col xl:gap-5 gap-5 relative'>
                  <img src="https://img.youtube.com/vi/6OvbfNdouno/maxresdefault.jpg" alt='Gaathas' className="w-full md:h-[308px] h-[250px] object-cover object-center" loading="lazy" />
                  <span
                    className='absolute h-full w-full flex justify-center items-center text-[50px] text-white cursor-pointer'
                    onClick={() => handlePlayClick('https://youtube.com/embed/6OvbfNdouno')}
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
    </>
  )
}

export default Ghaatha