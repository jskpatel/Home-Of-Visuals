import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';
import { images } from '../../assets/images'
import SubmitButton from '../../components/SubmitButton'
import { Link } from 'react-router-dom';

const ContactUs: React.FC = () => {

  const [showMobileNav, setShowMobileNav] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const selectedServices = Array.from(
      form.current.querySelectorAll('input[name="services"]:checked')
    ).map((input: any) => input.value).join(', &nbsp; ');

    // Set value to hidden field
    const hiddenInput = form.current.querySelector('input[name="selectedServices"]') as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = selectedServices;
    }

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_iwjai5a', 'template_amrx93e', form.current, '31dW-ybEd3wXO6gMf')
      .then((result) => {
        console.log('Message sent:', result.text);
        setStatus('success');
        form.current?.reset();
      }, (error) => {
        setStatus('error');
        console.error('Message failed:', error.text);
      });
  };

  const handleClickSubmit = () => {
    setTimeout(() => {
      setStatus(null)
    }, 8000)
  }

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
                <Link to="/" className='text-white lg:text-[26px] text-[20px] operetta-light'>Home of visuals</Link>
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
          <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
            <img src={images.contactHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-top absolute opacity-50 grayscale1' loading="lazy" />
            <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>Lock Us</h1>
          </div>
        </section>

        <section>
          <div className="bg-[#dfc1b1] min-h-[50vh] lg:px-25 px-5 pb-24">
            <div className="md:px-16 px-8 md:py-34 py-10 flex justify-center items-center lg:gap-x-4 gap-x-10 gap-y-20 w-full max-w-[1200px] mx-auto">
              <div className='flex flex-wrap justify-between gap-10 w-full max-w-[800px]'>

                <h2 className='mb-10 lg:text-[28px] text-[20px] leading-12 text-center w-full operetta-light'>YOUR WEDDING TIMELESS & ARTISTIC </h2>
                <p className='mb-3 text-[18px] leading-12 lg:mb-10 mb-0 text-center font-light'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved</p>

                <div className="flex lg:gap-24 gap-14 justify-center items-center mb-20 w-full">
                  <a href='https://wa.me/7698608009?text=Welcome%20to%20Home%20Of%20Visuals' target='_blank' className="border-1 rounded-md uppercase px-10 py-5 flex items-center text-[16px] justify-center gap-4 cursor-pointer" title='Whatsapp'>
                    <FaWhatsapp className='h-[20px] w-[20px] text-black' /> Let's connect
                  </a>
                </div>

                <div className='bg-white md:rounded-[50px] rounded-[20px] md:px-16 px-8 md:py-24 py-10 flex flex-col justify-center items-center lg:gap-x-4 gap-x-10 gap-y-16 w-full max-w-[1200px] mx-auto'>

                  {status === 'success' && <p className="text-green-500 bg-green-100 w-full px-6 py-3 text-[16px]">Message sent successfully!</p>}
                  {status === 'error' && <p className="text-red-500 bg-red-100 w-full px-6 py-3 text-[16px]">Failed to send message. Please try again.</p>}

                  <form className="w-full" ref={form} onSubmit={sendEmail}>
                    <div className='flex flex-col mb-5'>
                      <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Bride - Groom Name<span className='text-red-500'>*</span></label>
                      <input type="text" name="name" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px]' required />
                    </div>

                    <div className="flex justify-between w-full flex-wrap md:flex-row flex-col">
                      <div className='flex flex-col mb-5 md:w-[48%] w-full'>
                        <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Email<span className='text-red-500'>*</span></label>
                        <input type="email" name="email" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px]' required />
                      </div>

                      <div className='flex flex-col mb-5 md:w-[48%] w-full'>
                        <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Phone<span className='text-red-500'>*</span></label>
                        <input type="tel" name="phone" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px]' required />
                      </div>

                      <div className='flex flex-col mb-5 md:w-[48%] w-full'>
                        <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>No of Guests<span className='text-red-500'>*</span></label>
                        <input type="text" name="guestCount" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px]' required />
                      </div>

                      <div className='flex flex-col mb-5 md:w-[48%] w-full'>
                        <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Events Dates<span className='text-red-500'>*</span></label>
                        <div className="flex gap-3 sm:flex-row flex-col">
                          <input type="date" name="from-date" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px] appearance-none' required />
                          <input type="date" name="to-date" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px] appearance-none' required />
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col mb-5'>
                      <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Location of Wedding<span className='text-red-500'>*</span></label>
                      <input type="text" name="location" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light h-[40px]' required />
                    </div>

                    <div className='flex flex-col mb-5'>
                      <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Looking for services<span className='text-red-500'>*</span></label>
                      <ul className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 flex flex-col lg:gap-0 gap-5 pl-2  operetta-light'>
                        <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" value="Photography" className='lg:scale-[1.7] scale-[1.1]' /> Photography</li>
                        <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" value="Filmmaking" className='lg:scale-[1.7] scale-[1.1]' /> Filmmaking</li>
                        <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" value="Photography & Filmmaking" className='lg:scale-[1.7] scale-[1.1]' /> Photography & Filmmaking</li>
                      </ul>
                    </div>

                    <div className='flex flex-col mb-5'>
                      <label className='lg:text-[16px] text-[14px] lg:leading-14 leading-10 operetta-light'>Tell us more about your wedding - event flow, venues<span className='text-red-500'>*</span></label>
                      <textarea rows={5} name="description" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[16px] font-light'></textarea>
                    </div>

                    <div className='flex flex-col mb-5'>
                      <SubmitButton onclick={handleClickSubmit} status={status} />
                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>

  )
}

export default ContactUs