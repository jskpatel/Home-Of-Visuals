import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { images } from '../../assets/images'
import SubmitButton from '../../components/SubmitButton'

const ContactUs: React.FC = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    // emailjs.sendForm('service_0kejk5s', 'template_2hakuw8', form.current, 'LAmaVI7VURXH5Ls-T')
    emailjs.sendForm('service_iwjai5a', 'template_amrx93e', form.current, '31dW-ybEd3wXO6gMf-T')
      .then((result) => {
        console.log('Message sent:', result.text);
        form.current?.reset();
      }, (error) => {
        console.error('Message failed:', error.text);
      });
  };
  return (
    <main>
      <section>
        <div className="w-full h-[85vh] min-h-[400px] bg-[#000] text-center flex items-center justify-center flex-col text-white relative">
          <img src={images.contactHeader} alt="Tasveer" className='bg-[#D9D9D9] w-full h-full object-cover object-center00 absolute opacity-50 grayscale' />
          <h1 className='uppercase font-normal xl:text-[48px] lg:text-[40px] text-[30px] leading-26 z-1 relative operetta'>Book Us</h1>
        </div>
      </section>

      <section>
        <div className="bg-[#EECACA] min-h-[50vh] lg:px-25 px-5 lg:pt-30 pt-24 pb-24">
          <div className="bg-white md:rounded-[50px] rounded-[20px] md:px-16 px-8 md:py-34 py-10 flex justify-center items-center lg:gap-x-4 gap-x-10 gap-y-20 w-full max-w-[1200px] mx-auto">
            <div className='flex flex-wrap justify-between gap-10 w-full max-w-[800px]'>

              <h2 className='mb-16 lg:text-[28px] text-[20px] leading-12 text-center w-full'>YOUR WEDDING TIMELESS & ARTISTIC </h2>
              <p className='mb-3 lg:text-[24px] text-[16px] lg:leading-16 leading-12 lg:mb-10 mb-0 text-center font-normal'>Others who use this device won't see your activity, so you can browse more privately. This won't change how data is collected by websites that you visit and the services that they use, including Google. Downloads, bookmarks and reading list items will be saved</p>

              <div className="flex lg:gap-24 gap-14 justify-center items-center my-20 w-full">
                <span className="rounded-full h-[60px] w-[60px] bg-[#d9d9d9]"></span>
                <span className="rounded-full h-[60px] w-[60px] bg-[#d9d9d9]"></span>
                <span className="rounded-full h-[60px] w-[60px] bg-[#d9d9d9]"></span>
              </div>

              <form className="w-full" ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col mb-8'>
                  <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Bride - Groom Name</label>
                  <input type="text" name="name" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px]' required />
                </div>

                <div className="flex justify-between w-full flex-wrap md:flex-row flex-col">
                  <div className='flex flex-col mb-8 md:w-[48%] w-full'>
                    <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Email</label>
                    <input type="email" name="email" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px]' required />
                  </div>

                  <div className='flex flex-col mb-8 md:w-[48%] w-full'>
                    <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Phone</label>
                    <input type="tel" name="phone" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px]' required />
                  </div>

                  <div className='flex flex-col mb-8 md:w-[48%] w-full'>
                    <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>No of Guests</label>
                    <input type="text" name="guestCount" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px]' required />
                  </div>

                  <div className='flex flex-col mb-8 md:w-[48%] w-full'>
                    <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Events Dates</label>
                    <input type="date" name="date" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px] appearance-none' required />
                  </div>
                </div>

                <div className='flex flex-col mb-8'>
                  <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Location of Wedding</label>
                  <input type="text" name="location" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px] h-[52px]' required />
                </div>

                <div className='flex flex-col mb-8'>
                  <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Looking for services</label>
                  <ul className='lg:text-[24px] text-[16px] lg:leading-24 leading-10 flex flex-col lg:gap-0 gap-5 pl-2'>
                    <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" className='lg:scale-[1.7] scale-[1.1]' /> Photography</li>
                    <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" className='lg:scale-[1.7] scale-[1.1]' /> Filmmaking</li>
                    <li className='flex items-center lg:gap-8 gap-5'><input type='checkbox' name="services" className='lg:scale-[1.7] scale-[1.1]' /> Photography & Filmmaking</li>
                  </ul>
                </div>

                <div className='flex flex-col mb-8'>
                  <label className='lg:text-[24px] text-[16px] lg:leading-24 leading-16'>Tell us more about your wedding - event flow, venues</label>
                  <textarea rows={5} name="description" className='border border-1 border-black-800 w-full rounded-lg px-5 text-[18px]'></textarea>
                </div>

                <div className='flex flex-col mb-8'>
                  <SubmitButton />
                </div>

              </form>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs