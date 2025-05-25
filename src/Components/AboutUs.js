import React from 'react'
import {  faseedling,} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div>
      <div className="container-fluid about pt-5 mt-3">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 mb-3 mb-lg-0">
                <div className='w-full max-w-6xl p-5  mr-2 pb-10 mx-1 mb-10 gap-3 columns-2 space-y-3'>
                  <img src='farmarg.jpg' className='h-64 w-72'  width="500px" height="400px" alt=" "/>
                  <img src='farmer literate.jpg' className='h-60' alt=" "/>
                  <img src='farmerapp.jpg' alt=" "/>
                  <img src='banner1.jpg' alt=" "/>
                  <img src='Farmerr.jpg' alt=" "/>

                  </div>
                </div>
                <div className="col-lg-6 pb-5">
                    <div className="mb-3 pb-2">
                        <h2 className="text-green-600 text-uppercase text-4xl">About Us</h2>
                        <h1 className="display-5">Empowering Farmers Through Technology</h1>
                    </div>
                    <p className="mb-4">We empower Indian farmers by providing essential resources and tools tailored to their needs. From access to up-to-date market trends and weather forecasts to practical agricultural advice and tips, our platform serves as a comprehensive guide for informed decision-making. We facilitate direct connections with buyers, enabling fair market opportunities, and offer educational content on sustainable practices and technological advancements in farming. By bridging the gap between traditional knowledge and modern solutions</p>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-6">
                           <img src='https://img.icons8.com/?size=100&id=KJ89pqeJejek&format=png&color=40C057' alt=''/>
                            <h4>100% Safe</h4>
                            <p className="mb-0">It is safe and valuable to use</p>
                        </div>
                        <div className="col-sm-6">
                            <img src='https://img.icons8.com/?size=100&id=112405&format=png&color=40C057' alt=''/>
                            <h4>100% TrustWorthy</h4>
                            <p className="mb-0">Its is trustworthy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
