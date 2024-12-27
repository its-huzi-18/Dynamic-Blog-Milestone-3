import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AuthorCard() {
  const socialLinks = [
    { name: 'Github', link: 'https://github.com/its-huzi-18' },
    { name: 'Facebook', link: 'https://www.facebook.com/HuzaifaWH2021' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/huzaifa-wahab-1137432ba/' },
  ]

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12 max-w-4xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center md:items-start animation-fadeIn'>
        <Image
          width={300}
          height={300}
          className='w-24 h-24 md:w-[6rem] md:h-[6rem] mr-0 md:mr-5 rounded-full object-cover border-2 border-red-500'
          src={'/images/myImage.png'}
          alt='Author Image'
        />
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-bold'>Huzaifa Wahab</h3>
          <p className='text-slate-500'>Frontend Developer & Blogger</p>
          <p className='mt-4 text-black leading-relaxed'>
            {`Passionate IT student at Governor House, proficient in HTML, CSS, JavaScript, Next.js, and TypeScript. Dedicated to honing my skills in web development and embracing emerging technologies. Experienced in project development, including currency converter and e-commerce websites. Currently exploring AI and building innovative projects like ATM simulations. Notable projects include "TrendSphere E-Commerce," "PixelCraft Figma Clone," and "Devfolio Portfolio Website." Eager to contribute to the tech industry and make a positive impact.`}
          </p>
          <div className='mt-4 flex flex-wrap justify-center md:justify-start space-x-3'>
            {socialLinks.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  target='_blank'
                  className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
