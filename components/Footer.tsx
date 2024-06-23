'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {


    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
    }


  return (
    <footer id='footer' className='flex flex-col text-black-100 
    mt-5 border-t border-gray-100'>
        <div className="flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16
        px-6 py-10" >

            <div className="flex flex-col justify-start items-start gap-3">
                <Link href="/">
                <Image 
                 src="/logo.png" 
                 alt="logo"
                 width={118} 
                 height={18} 
                 className="object-name ml-[-21px]"  
                 />
          {/* <h1 className='font-black text-2xl text-primary'>CarHub</h1> */}

                 </Link> 
                 
                    <p className="text-base 
                    text-primary">
                               
    
                        Powered by Rapid API Cars by Ninjas
                 
                     

                    </p>

               
            </div>

            <div className="footer__links text-primary">
                {footerLinks.map((link) => (

                    <div 
                        key={link.title}
                        className="footer__link">
                            <h3 className='font-bold'>
                                {link.title}</h3>
                                {link.links.map((item) => (
                                    
                                <a 
                                    onClick={() => handleScroll('footer')}
                                    key={item.title}
                                    className='cursor-pointer text-primary duration-300 ease-in-out hover:text-[#2B59FF]'
                                    >
                                        {item.title}
                                    </a>
                                ))}
                    </div>
                ))}
            </div>
            </div>

            <div className="flex justify-between items-center text-primary
            flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                
                <p className='hidden md:block'>&copy;2024 All Rights Reserved</p>
                <p className='block md:hidden pr-7'>&copy;2024 All <br /> Rights Reserved</p>

                <div className="footer__copyrights-link">
                    <button
                    className='text-primary duration-300 ease-in-out ml-7 hover:text-[#2B59FF]'>
                        Privacy Policy
                    </button>

                    <button
                    className='text-primary duration-300 ease-in-out hover:text-[#2B59FF]'>
                       Terms Of Use
                    </button>
                </div>
                
            </div>

    </footer>
  )
}

export default Footer