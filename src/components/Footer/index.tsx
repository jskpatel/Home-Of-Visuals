import React from 'react'
import { FaInstagram, FaWhatsapp  } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="bg-[#302219] py-10">
          <div className="flex flex-col lg:gap-5 text-center max-w-[810px] px-5 mx-auto text-white">
            <p className='lg:text-[20px] md:text-[18px] text-[14px] lg:leading-12 leading-10'>HOME OF  VISUALS, All images and videos are copyrighted.</p>
            <p className='lg:text-[20px] text-[14px] lg:leading-12 leading-10 font-light flex lg:flex-row flex-col justify-center lg:gap-x-20 lg:mt-0 mt-5 lg:mb-0 mb-10'>
              <span>Email : <a href="mailto:hello@homeofvisuals.co.in">hello@homeofvisuals.co.in</a></span>
              <span>Phone : <a href="tel:+9172278384528">+91 72278384528</a></span>
            </p>

            <div className="flex lg:gap-y-24 gap-14 justify-center items-center my-7">
              <a href='' target='_blank' className="rounded-full h-[30px] w-[30px] flex items-center justify-center text-[40px] cursor-pointer text-white" title='Whatsapp'><FaWhatsapp  /></a>
              <a href='' target='_blank' className="rounded-full h-[30px] w-[30px] flex items-center justify-center text-[40px] cursor-pointer text-white" title='Youtube'><FiYoutube  /></a>
              <a href='https://www.instagram.com/thehomeofvisuals?utm_source=qr&igsh=MTZjam02eGo1ZjFxYQ==' target='_blank' className="rounded-full h-[30px] w-[30px] flex items-center justify-center text-[40px] cursor-pointer text-white" title='Instagram'><FaInstagram /></a>
            </div>

            <ul className='p-0 sm:m-0 mt-7 flex flex-row lg:gap-20 sm:gap-10 gap-10 uppercase lg:text-[18px] text-[14px] leading-10 w-full text-center justify-center inter-light'>
              <li><Link to="/tasveers">TASVEERS</Link></li>
              <li><Link to="/contactus">Lock US</Link></li>
              <li><Link to="/gaathas">GAATHAS</Link></li>
              <li><Link to="/blogs">BLOGS</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer