import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className='bg-white text-black rounded-t-[50px] md:rounded-t-[100px] -mt-36 pt-16 md:pt-36 capitalize px-2.5 md:px-0'>
        {/* About Info */}
        <div className='flex flex-col md:flex-row md:items-end justify-between md:px-20 mb-10'>
          <div className='md:max-w-[45%] flex flex-col gap-8 mb-5'>
            <h4 className='text-4xl md:text-5xl font-semibold md:font-medium'>Teamwork makes the dream work</h4>
            <p className='text-base md:text-xl'>We have assembled a team of people who are really passionate about games and game development! We love to fantasize, invent, and set the most ambitious goals for ourselves. And our team is as passionate as it is diverse, for it includes people from all over the world.</p>
          </div>
          <Link href='/' className='text-2xl md:text-4xl flex gap-2 opacity-70 group'>join <Image src='/images/arrow.svg' className='group-hover:rotate-45 duration-300' alt='arrow' width={40} height={40}/></Link>
        </div>
        {/* About Image */}
        <div className='relative overflow-hidden md:mx-5 rounded-[50px] md:rounded-[100px]'>
          <Image src='/images/about-img.jpg' className='scale-105 hover:scale-100 w-screen h-[500px] md:h-full object-cover duration-300' alt='about' width={1000} height={1000}/>
          <Link href='/' className='text-xl bg-white text-black hover:bg-[#dcdcdc] font-medium rounded-3xl px-6 py-2.5 absolute top-5 md:top-10 left-5 md:left-20 duration-300'>carrers</Link>
        </div>
        {/* About More */}
        <div className='flex flex-col items-center justify-center text-center gap-5 py-16 md:py-30'>
          <h4 className='text-[40px] md:text-[80px] font-medium leading-tight max-w-[36ch]'>We make games that bring joy to millions of players from all over the world. And we share the feeling.</h4>
          <Link href='/' className='text-2xl flex gap-2 opacity-70 group'>about kuber <Image src='/images/arrow.svg' className='group-hover:rotate-45 duration-300' alt='arrow' width={40} height={40}/></Link>
        </div>
        {/* About Idea */}
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 md:px-5 py-10 md:py-20'>
          <div className='rounded-[50px] md:rounded-[100px] w-full overflow-hidden'>
            <Image src='/images/about-img2big.jpg' className='scale-105 hover:scale-100 duration-300 w-screen h-[500px] md:h-full object-cover' alt='about-img2' height={700} width={1200}/>
          </div>
          <div className='flex flex-col items-start justify-between gap-10 md:px-10'>
            <h4 className='text-5xl font-medium'>A place for ideas, solutions, and warm chats</h4>
            <p className='text-xl'>Our offices aren’t just work spaces. They are hubs where we create products that make us proud</p>
            <Link href='/' className='text-2xl flex gap-2 opacity-70 group'>our home <Image src='/images/arrow.svg' className='group-hover:rotate-45 duration-300' alt='arrow' width={40} height={40}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page