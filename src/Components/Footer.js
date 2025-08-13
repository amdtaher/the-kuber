import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-2.5 md:px-0">
        <div className="flex flex-col md:flex-row items-start justify-between text-center font-medium capitalize py-10 md:py-20 md:px-20">
          {/* Footer Left */}
          <div className='flex flex-col items-start justify-between gap-10'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-5'>
              <Link href="/about" className="text-xl hover:opacity-70 duration-300">about</Link>
              <Link href="/carrer" className="text-xl hover:opacity-70 duration-300">carrer</Link>
              <Link href="/offices" className="text-xl hover:opacity-70 duration-300">offices</Link>
              <Link href="/partnership" className="text-xl hover:opacity-70 duration-300">partnership</Link>
              <Link href="/games" className="text-xl hover:opacity-70 duration-300 flex gap-2">games <Image src='/images/arrow-down.svg' alt='arrow-down' width={15} height={15}/></Link>
            </div>
            <div className='cursor-pointer'>
              <Link href="/" className='text-4xl font-extrabold uppercase'>kuber</Link>
            </div>
          </div>
          {/* Footer Right */}
          <div className='flex flex-col items-start justify-between gap-3'>
            <div className='flex items-center justify-between gap-5 py-3'>
              <Link href="/" className="text-xl hover:opacity-70 duration-300">
                <Image src='/images/insta.svg' className='bg-white p-2 rounded-2xl' alt='arrow-down' width={50} height={50}/>
              </Link>
              <Link href="/" className="text-xl hover:opacity-70 duration-300">
                <Image src='/images/yt.svg' className='bg-white p-2 rounded-2xl' alt='arrow-down' width={50} height={50}/>
              </Link>
              <Link href="/" className="text-xl hover:opacity-70 duration-300">
                <Image src='/images/linkedin.svg' className='bg-white p-2 rounded-2xl' alt='arrow-down' width={50} height={50}/>
              </Link>
            </div>
            <Link href="/" className="text-lg hover:opacity-70 duration-300">privacy policy & terms</Link>
            <span className='text-lg'>@ kuber 2009-2025</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer