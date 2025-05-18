import React from 'react'
import { FaInstagram, FaWhatsapp  } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="bg-[#e7c0c0] py-24">
          <div className="flex flex-col lg:gap-10 text-center max-w-[810px] px-5 mx-auto text-white">
            <p className='lg:text-[30px] text-[20px] lg:leading-12 leading-10 mb-0'>HOME OF  VISUALS, All images and videos are copyrighted.</p>
            <p className='lg:text-[24px] text-[20px] lg:leading-12 leading-10 flex lg:flex-row flex-col justify-between lg:mt-0 mt-10'>
              <span>Email : <a href="mailto:hello@homeofvisuals.co.in">hello@homeofvisuals.co.in</a></span>
              <span>Phone : <a href="tel:+9172278384528">+91 72278384528</a></span>
            </p>

            <div className="flex lg:gap-24 gap-14 justify-center items-center my-24">
              <a href='' target='_blank' className="rounded-full h-[60px] w-[60px] flex items-center justify-center text-[50px] cursor-pointer text-green-700" title='Whatsapp'><FaWhatsapp  /></a>
              <a href='' target='_blank' className="rounded-full h-[60px] w-[60px] flex items-center justify-center text-[50px] cursor-pointer text-red-500" title='Youtube'><FiYoutube  /></a>
              <a href='https://www.instagram.com/thehomeofvisuals?utm_source=qr&igsh=MTZjam02eGo1ZjFxYQ==' target='_blank' className="rounded-full h-[60px] w-[60px] flex items-center justify-center text-[50px] cursor-pointer text-pink-800" title='Instagram'><FaInstagram /></a>
            </div>

            <ul className='p-0 m-0 flex flex-row lg:gap-20 gap-10 uppercase lg:text-[26px] text-[16px] lg:leading-17 leading-12 w-full text-center justify-center inter-light'>
              <li><Link to="/tasveers">TASVEERS</Link></li>
              <li><Link to="/contactus">BOOK US</Link></li>
              <li><Link to="/gaathas">GAATHA</Link></li>
              <li><Link to="/blogs">BLOGS</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer