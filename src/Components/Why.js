import React from 'react'
import Features from './Features'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

export default function Why() {
  return (
    <div>
        <div class="container-fluid bg-green-900 feature h-2/4 py-5 pb-lg-0 my-3">
        <div class="container py-5 pb-lg-0">
            <div class="mx-auto text-center mb-1 pb-3">
                <h1 class="display-4 text-white text-center mt-0">KRISHAK</h1>
            </div>
            <div class="row gap-5">
                <div class="col-lg-3">
                    <div class="text-white mb-4 mt-0">
                        <div class="d-flex align-items-center justify-content-center mb-3" >
                           <img src='https://img.icons8.com/?size=100&id=GBu1KXnCZZ8j&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Meteorological Forecasting Weather System</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white text-center">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                        <img src='https://img.icons8.com/?size=100&id=N4ua4pgyhvck&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold">Artificial Intelligence</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white text-center ">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                        <img src='https://img.icons8.com/?size=100&id=18081&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold">Farmer collaboration portal</h4>
                        <p class="mb-0"></p>
                    </div>
                </div>
                <div class=" col-lg-7 relative w-[500px] h-[500px] rounded-[10px] shadow-[16px_16px_18px_#0000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-gradient-to-l from-yellow-400 via-yellow-600 to-red-600... before:animate-spin-slow flex flex-col ml-4">
                <div className='absolute flex justify-center align-middle top-[10px] right-[10px] bottom-[10px] left-[10px] rounded-[10px] px-4 bg-green-500 shadow-[20px_20px_20px_bg_inset]'>

                    <div class="d-block bg-green-500 font-semibold text-white h-1/4 text-center p-4 pb-lg-0">
                        <img class="h-[500px] w-[700px] mt-0" src="why.jpg" alt=""/>
                    </div>
                </div>
                </div>
                <div class="col-lg-3">
                    <div class="text-white mb-5">
                        <div class=" d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=15168&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Farmer collaboration portal</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white ">
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=UveN44WODIpA&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">Voice-Activated Navigation</h4>
                        <p class="mb-0"></p>
                    </div>
                    <div class="text-white">
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <img src='https://img.icons8.com/?size=100&id=103409&format=png&color=000000' alt=''/>
                        </div>
                        <h4 class="text-white font-bold text-center">AI-Optimized Irrigation planner</h4>
                        <p class="mb-0"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Features/>
    <AboutUs/>
    <ContactUs/>
    </div>
   
  )
}
