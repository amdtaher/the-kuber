'use client'
import { useEffect, useRef } from 'react'
import NavBar from '@/Components/NavBar'
import gsap from 'gsap'

const Page = () => {
    const textRef = useRef([])

  useEffect(() => {
    // Idle animation: floating up and down
    gsap.to(textRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: .1,
    })
  }, [])

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      y: -50,
      scale: 1.1,
      duration: 0.5,
      ease: 'bounce.out',
      stagger: {
        each: .05,
        
      }
    })
  }

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      y: -10,
      scale: 1,
      duration: 0.6,
      ease: 'power1.out',
    })
  }

  const text = 'we make games'

  return (
    <>
      <div className="relative w-full h-screen">
        <video autoPlay loop muted className="hero-video absolute top-0 right-0 w-full h-screen -z-10 object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 w-full h-screen -z-10"></div>
        <NavBar />

        <div className='flex items-center justify-center text-center h-screen -mt-30'>
          <h2 className='text-[77px] md:text-[135px] font-bold md:font-semibold text-white capitalize'
          ref={textRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            {text.split('').map((ch, i)=>(
              <span
                key={i}
                ref={element =>  textRef.current[i] = element}
                className='inline-block'
              >
                {ch === '' ? '\u00A0' : ch}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Page
