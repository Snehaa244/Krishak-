import React from 'react'

export default function ContactUs() {
  return (
    <section class="text-green-600 body-font relative mt-14">
      
  <div class="absolute inset-0 bg-[#2E8B57]">
  <h1 className='flex text-4xl justify-center mt-2 font-bold text-white'>Get In Touch With Us</h1>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.515993653525!2d75.94014997481844!3d22.820391623843804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf455b4cec3%3A0x426141aa8141f7a5!2sAcropolis%20Institute%20Of%20Technology%20And%20Research%20-%20AITR!5e0!3m2!1sen!2sin!4v1719721244021!5m2!1sen!2sin" width="850" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ml-8 mt-4'></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-[#00A572] rounded-lg p-6 flex flex-col md:ml-auto w-full mt-20 md:mt-0 relative shadow-md border-green-400 border-[5px]">
      <h2 class="text-white font-bold text-lg mb-1 justify-center title-font">ContactUs</h2>
      <p class="leading-relaxed mb-2 text-white">Feel Free to Contact Us we are availabe 24/7 TO Support You!</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter Your Email Here' class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-white">Message</label>
        <textarea id="message" name="message" placeholder='Enter Your Message Here' class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className=' border-white  border-2 mt-1 ml-32  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-green-800 via-green-600 to-green-900 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Submit</button>
    </div>
  </div>
</section>
  )
}
