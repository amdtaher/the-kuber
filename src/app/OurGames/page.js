'use client'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
  const[hover, setHover] = useState(null);
  const vid1 = useRef(null)
  const vid2 = useRef(null)

  useEffect(() => {
    if(vid1.current && vid2.current){
      if(hover === 'card1'){
        vid1.current.play()
        vid2.current.pause()
      }
      else if(hover === 'card2'){
        vid2.current.play()
        vid1.current.pause()
      }
      else{
        vid1.current.pause()
        vid2.current.pause()
      }
    }
  }, [hover])

  return (
    <>
      <div className='rounded-t-[100px] -mt-36 pt-36 capitalize'>
        {/* Our Games */}
        <div className='bg-white text-black capitalize py-10 md:py-20 px-2.5'>
          <div className='md:px-15'>
            <h4 className='text-3xl md:text-5xl font-semibold md:font-medium'>our games</h4>
            <div className='flex flex-row items-center justify-start gap-2.5 md:gap-5 py-5 md:py-10'>
              <button className='text-base md:text-xl font-medium bg-black text-white rounded-full px-8 md:px-10 py-5 cursor-pointer capitalize' 
              onClick={() => setHover('card1')}>last day on earth</button>
              <button className='text-base md:text-xl font-medium bg-black text-white rounded-full px-8 md:px-10 py-5 cursor-pointer capitalize'
              onClick={() => setHover('card2')}
              >frostborn</button>
            </div>
          </div>
          {/* Cards */}
          <div className='w-full h-[350px] md:h-[600px] flex md:flex-row items-center justify-between gap-2 md:gap-5 overflow-hidden'>
            {/* Card 1 */}
            <Link href='/' className={`relative w-full h-full duration-300 ${ hover === 'card2' ? 'flex-[.2]' : 'flex-[.8]'}`} onMouseEnter={() => setHover('card1')} >
              <div className='w-full absolute inset-0 bg-black/20 object-cover h-full rounded-[30px] md:rounded-[50px] z-10'></div>
              <video src='/videos/game1.mp4' 
              loop autoPlay muted playsInline 
              ref={vid1}
              className='w-full absolute inset-0 object-cover h-full rounded-[30px] md:rounded-[50px]'>
              </video>
              {/* Content */}
              <div className={`absolute inset-0 flex-col items-start justify-between text-white font-medium z-10 ${hover === 'card2' ? 'hidden' : 'flex'}`}>
                <div className='w-full flex items-center justify-between absolute top-0 left-0 md:left-10 pr-0 md:pr-10'>
                  <Image src='/images/game1_logo.png' width={220} height={200} alt='ldoe' className='w-1/3 md:w-auto'/>
                  <button className='cursor-pointer pr-5 md:pr-10'>
                    <Image src='/images/arrow.svg' width={50} height={50} alt='arrow' className='bg-white rounded-full'/>
                  </button>
                </div>
                <p className='absolute bottom-0 md:bottom-10 left-2.5 md:left-10 px-2.5 md:px-10 pb-5 text-sm md:text-lg md:max-w-[45%]'>You are to dive into the gloomy world of a zombie apocalypse thats on the verge of destruction.Life has almost disappeared while crows of the living dead came to replace it destroying the civilization</p>
              </div>
            </Link>
            {/* Card 2 */}
            <Link href='/' className={`relative w-full h-full duration-300 ${ hover === 'card1' ? 'flex-[.2]' : 'flex-[.2]'} ${ hover === 'card2' ? 'flex-[.8]' : ''}`} onMouseEnter={() => setHover('card2')}>
              <div className='w-full absolute inset-0 bg-black/20 object-cover h-full rounded-[30px] md:rounded-[50px] z-10'></div>
              <video src='/videos/game2.mp4' 
              loop autoPlay muted playsInline
              ref={vid2}
              className='w-full absolute inset-0 object-cover h-full rounded-[30px] md:rounded-[50px]'>
              </video>
              {/* Content */}
              <div className={`absolute inset-0 flex-col items-start justify-between text-white font-medium z-10 ${ hover === 'card1' ? 'hidden' : 'flex'} ${hover === null ? 'hidden' : ''}`}>
                <div className='w-full flex items-center justify-between absolute top-8 md:top-20 left-0 md:left-10 pr-0 md:pr-10'>
                  <Image src='/images/game2_logo.png' width={220} height={200} alt='ldoe' className='w-1/2 md:w-auto'/>
                  <button className='cursor-pointer pr-5 md:pr-10'>
                    <Image src='/images/arrow.svg' width={50} height={50}  alt='arrow' className='bg-white rounded-full'/>
                  </button>
                </div>
                <p className='absolute bottom-0 md:bottom-10 left-2.5 md:left-10 px-0 md:px-10 pb-5 text-sm md:text-lg md:max-w-[45%]'>You are to dive into the gloomy world of a zombie apocalypse thats on the verge of destruction.Life has almost disappeared while crows of the living dead came to replace it destroying the civilization</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Our Help */}
        <div className='bg-black'>
          <div className='bg-white flex flex-col items-start justify-between gap-5 md:gap-10 capitalize pb-16 md:pb-36 rounded-b-[50px] md:rounded-b-[100px] px-5 md:px-20'>
            <h4 className='text-4xl md:text-9xl'>We help you make games</h4>
            <p className='text-base md:text-xl md:max-w-[43%]'>Games are our passion and our calling. They’re also entirely a team effort. There is nothing cooler than joining a guild and creating something new and unique. We are always open to new ideas and ready to help you implement them.</p>
            <Link href='/' className='text-2xl flex gap-2 opacity-70 group'>join <Image src='/images/arrow.svg' className='group-hover:rotate-45 duration-300' alt='arrow' width={40} height={40}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page