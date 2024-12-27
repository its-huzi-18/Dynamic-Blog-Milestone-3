import React from 'react'

function page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
     <h1 className='text-center text-5xl font-semibold animate-color-change'>About Us</h1>
          <div className="flex flex-col sm:flex-row mt-11 shadow-lg px-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 object-contain h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Huzaifa Wahab</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ɪᴛ ᴇɴᴛʜᴜꜱɪᴀꜱᴛ | ᴍᴀꜱᴛᴇʀɪɴɢ ɴᴇxᴛ.ᴊꜱ, ᴛʏᴘᴇꜱᴄʀɪᴘᴛ, ʜᴛᴍʟ, ᴀɴᴅ ᴄꜱꜱ | ᴇᴀɢᴇʀ ᴛᴏ ᴇxᴘʟᴏʀᴇ ᴀɪ ᴀɴᴅ ᴘʏᴛʜᴏɴ.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-md mb-4">Passionate IT student at Governor House, proficient in HTML, CSS, JavaScript, Next.js, and TypeScript. Dedicated to honing my skills in web development and embracing emerging technologies. Experienced in project development, including currency converter and e-commerce websites. Currently exploring AI and building innovative projects like ATM simulations. Notable projects include &quot;TrendSphere E-Commerce,&quot; &quot;PixelCraft Figma Clone,&quot; and &quot;Devfolio Portfolio Website.&quot; Eager to contribute to the tech industry and make a positive impact.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
 )
}

export default page