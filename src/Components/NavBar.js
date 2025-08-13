'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  const [showNavigation, setShowNavigation] = useState(true);
  const [scrolled, setScrolled] = useState(false)
  const [hamburger, setHamburger] = useState(false);
  const hamburgerRef = useRef(null);
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // For hides on scrolls down and shows up when scrolls up
      if(currentScroll > lastScroll.current && currentScroll > 100){
        setShowNavigation(false)
      }else{
        setShowNavigation(true)
      }
      lastScroll.current = currentScroll

      // For transparent Bg on Top
      if(currentScroll <= 10){
        setScrolled(false)
      }else{
        setScrolled(true)
      }
    };
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const ham = hamburgerRef.current;
    if (ham) {
      const toggle = () => setHamburger(prev => !prev);
      ham.addEventListener('click', toggle);

      return () => {
        ham.removeEventListener('click', toggle); // Cleanup
      };
    }
  }, []);

  return (
    <div className='relative'>
      <nav className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-between text-white font-medium capitalize py-0 md:py-8 md:px-20 ease-linear duration-300 z-10 ${ showNavigation ? 'translate-y-0' : '-translate-y-full' } ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
        {/* Nav Left */}
        <div className={`${
            hamburger ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-end md:items-start justify-center gap-5 absolute md:static top-12 right-0 bg-black md:bg-transparent pt-8 md:pt-0 pb-12 md:pb-0 pl-16 md:pl-0 pr-8 md:pr-0 rounded-xl md:rounded-none`}>
          <Link href="#About" className="hover:opacity-70 duration-300">about</Link>
          <Link href="#Hero" className="hover:opacity-70 duration-300">carrer</Link>
          <Link href="#Offices" className="hover:opacity-70 duration-300">offices</Link>
          <Link href="#Partnership" className="hover:opacity-70 duration-300">partnership</Link>
          <Link href="#Ourgames" className="hover:opacity-70 duration-300 flex gap-2">
            games 
            <Image src='/images/arrow-down.svg' alt='arrow-down' width={15} height={15}/>
          </Link>
          <Link href="/support" className="md:hidden hover:opacity-70 duration-300 flex gap-2">
            support 
            <Image src='/images/arrow-down.svg' alt='arrow-down' width={15} height={15}/>
          </Link>  
        </div>

        {/* Nav Center Logo */}
        <div className='md:absolute left-1/2 transform md:-translate-x-1/2 z-10 cursor-pointer pl-2.5 md:pl-0'>
          <Link href="/" className='text-4xl font-extrabold uppercase'>kuber</Link>
        </div>

        {/* Nav Right */}
        <div>
          <Link href="/support" className="hidden md:flex hover:opacity-70 duration-300 gap-2">
            support 
            <Image src='/images/arrow-down.svg' alt='arrow-down' width={15} height={15}/>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button ref={hamburgerRef} className="flex md:hidden hover:opacity-70 duration-300 gap-2 p-2 rounded-2xl mr-2.5">
          <Image src='/images/hamburger.png' alt='arrow-down' width={50} height={50}/>
        </button>
      </nav>
    </div>
  )
}

export default NavBar
