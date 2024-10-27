import React from 'react'
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
    <div>
        <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-[#8a7250] sm:px-20'>
            <section className='text-lg'>
                <h3>FindJob</h3>
                Copyright @{year} || All rights reserved
            </section>
            <section className="flex items-center justify-center gap-5 text-2xl text-white"> 
                <a href="https://twitter.com" className='hover:text-[#2e93db] transition-all ease-in-out duration-300'>
                    <BsTwitter/>
                </a>
                <a href="https://linkedin.com" className='hover:text-[#1fdea1] transition-all ease-in-out duration-300'>
                    <BsLinkedin/>
                </a>
                <a href="https://instagram.com" className='hover:text-[#f00cb3] transition-all ease-in-out duration-300'>
                    <BsInstagram/>
                </a>
                <a href="https://facebook.com" className='hover:text-[#1da6f5] transition-all ease-in-out duration-300'>
                    <BsFacebook/>
                </a>
            </section>
        </footer>
    </div>
  );
}

export default Footer