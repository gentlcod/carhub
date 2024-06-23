'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [sticked, setSticked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticked(true)
      } else {
        setSticked(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`w-full ${sticked ? 'fixed shadow-xl ease-in-out duration-300' : 'absolute bg-transparent'} top-0 z-30 bg-primary transition-all duration-300`}>
      <nav className={`max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ${sticked ? 'justify-center' : 'justify-between'} transition-all duration-300`}>
        <Link href="/" className={`flex justify-center items-center ml-[-16.5px] transition-all duration-300 ${sticked ? 'lg:transform lg:translate-x-1/2' : ''}`}>
          <Image 
            src="/logo.png"
            alt="Car Hub Logo"
            width={75}
            height={15}
            className="object-contain"
          />
          <h1 className='mr-5 font-black text-2xl text-primary'>CarHub</h1>
        </Link>

        <div className={`rounded-full p-3 bg-primary transition-all duration-300 ${sticked ? 'lg:transform lg:-translate-x-1/2' : ''}`}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
