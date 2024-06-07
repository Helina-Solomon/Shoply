import React from 'react'
import img from "../../assets/images/pngegg.png"
const Hero = () => {
  return (
    <div>
      <div className=' flex items-center justify-between h-screen px-40 bg-gray-200'>
        <div className=' -mt-36  '>
          <h1 className=' font-bold text-6xl'>Elevate Your Style.</h1>
          <p className='  text-2xl mt-3'>Find your favorite brands and discover new ones.</p>
          <button className=' hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800 text-xl bg-blue-900 py-2 text-white mt-10 p-4'>Shop Now</button>
        </div>
        <div>
          <img src={img} className=' w-[400px] h-[400px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
