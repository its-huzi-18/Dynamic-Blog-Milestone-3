import React from 'react'

function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
    <h2 className='text-center text-3xl font-bold md:text-5xl  animate-fade-in-up transition-all duration-500 ease-in-out tansform hover:translate-y-[-5px] hover:text-black text-red-600'
    >Huzaifa Wahab: ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ɪᴛ ᴇɴᴛʜᴜꜱɪᴀꜱᴛ | ᴍᴀꜱᴛᴇʀɪɴɢ ɴᴇxᴛ.ᴊꜱ, ᴛʏᴘᴇꜱᴄʀɪᴘᴛ| ᴇᴀɢᴇʀ ᴛᴏ ᴇxᴘʟᴏʀᴇ ᴀɪ ᴀɴᴅ ᴘʏᴛʜᴏɴ</h2>
    <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
    I am a passionate IT student at Governor House, constantly striving to enhance my skills and knowledge in the field of web development.Throughout my journey, I have developed and contributed to a range of projects, including a currency converter, e-commerce websites, and AI-based applications. One of my key projects, &quot;TrendSphere E-Commerce,&quot; showcases my ability to create user-friendly and functional e-commerce solutions.
    </p>
    <div className='mx-auto max-w-7xl px-5'>
<h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
  Explore Our Categories
</h1>

<div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up dealy-100'>
{[
  "Technology",
  "Artifical Inteligence",
  "Web Development",
  "TypeScript",
  "Next Js",
  "Python",
].map((category,index)=>(
  <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 '>
    <p className='text-center text-lg font-semibold'>{category}</p>
  <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>

  </div>
  </div>
))}
</div>
    </div>
    <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
    With a strong foundation as a web developer in Next.js and TypeScript, I am keen to delve into Python and Artificial Intelligence technologies, aiming to leverage these skills for innovative solutions in modern web development and beyond.
    </p>
    </section>
    </div>
  )
}

export default Feature