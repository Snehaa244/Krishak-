import React from 'react'
import './Features.css'
export default function Features() {
  return (
    <div>
      <div className='banner mt-0 flex-start '>
        <video autoPlay muted loop>
          <source src='video.mp4' className="mt-0" type="video/mp4"/>
        </video>
        <h1 className='font-extrabold mt-0'>Features We provide</h1>
      </div>
    <div>
  
    <div className='features'>
     
    <div className='containers mt-36 mb-0'>
        <div className='card'>
        <div className='iconss justify-center '>
          <img src='https://img.icons8.com/?size=100&id=9CQnMaixiqUW&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
          <h2>Irrigation Planner</h2>
          <p>The Irrigation Planner uses Vext AI to offer smart irrigation recommendations and includes a To-Do List and Manager to help farmers organize and prioritize watering tasks, ensuring efficient and timely irrigation.</p>
          <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
        </div>

        <div className='card'>
        <div className='iconss'>
          <img src='https://img.icons8.com/?size=100&id=VY9MLUH4ggfo&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2>Weather App</h2>
        <p>The Weather App provides real-time weather updates, allowing farmers to make informed decisions based on current weather conditions.</p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>

        </div>
        </div>

        <div className='card'>
        <div className='iconss'>
          <img src='https://img.icons8.com/?size=100&id=VY9MLUH4ggfo&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2>Disease Detection & Farm Intrusion</h2>
        <p>The Disease Detection feature leverages advanced AI to identify early signs of crop diseases, enabling timely intervention and reducing potential losses. The Animal Intrusion functionality monitors fields for any unauthorized animal activity, sending real-time alerts to prevent damage to crops. </p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
    </div>

    <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
          <img src='https://img.icons8.com/?size=100&id=DAZeLXBmj5dA&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2>IOT And Soil Analysis</h2>
        <p>The IoT and Soil Analysis feature uses IoT technology to collect real-time soil data, helping farmers make informed decisions on irrigation, fertilization, and crop management to enhance soil health and yields.
</p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
        </div>

        <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
          <img src='https://img.icons8.com/?size=100&id=AIwrOoWVG6nq&format=png&color=000000' className='ml-7'/>
        </div>
        <div className='content'>
        <h2>Agriculture Forum</h2>
        <p>The Agriculture Forum connects farmers with the Sikhayat Kendra for issue reporting, Community Events for local activities, and Market Updates for real-time price trends, promoting collaboration and support.

</p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
        </div>


        <div className='card'>
        <div className='iconss align-top mt-0 justify-start'>
        <img src='https://img.icons8.com/?size=100&id=22858&format=png&color=000000' className='ml-4'/>
        </div>
        <div className='content'>
        <h2>Farmers Guide</h2>
        <p>The Farmer Guide provides essential tips and resources on crop management, pest control, and irrigation to help farmers boost productivity and sustainability.</p>
        <button className=' mt-3 ml-20  transition group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'>Explore Now</button>
        </div>
        </div>
        </div>

    </div>
    </div>
    

    </div>
  )
}
