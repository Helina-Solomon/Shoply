import React from 'react'
import { Phone } from '@mui/icons-material'
import { LocationCity } from '@mui/icons-material'
import { Fax } from '@mui/icons-material'
import img from "../../assets/images/ladies-boot.jpg"
const contactData = [
    {
        id :"1",
        icon: <Phone/>,
        title:"Call Us 24X7",
        content:"0985 111 040",
    },
    {
        id :"2",
        icon: <LocationCity/>,
        title:"HeadeQuarter",
        content:"Addis Ababa",
    },
    {
        id :"3",
        icon: <Fax/>,
        title:"Fax",
        content:"0736 230",
    },
]
const Contacts = () => {
  return (
    <div>
      <div>
        <div style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "screen",
          width: "100%",
          filter: "brightness(0.6)",
        }} className=' h-[300px] object-cover'>

        </div>
        <div  className=' relative -top-52  text-center text-white text-3xl'>
            <h1 className=' font-bold'>DO YOU NEEED MORE TIPS?</h1>
            <h1 className=' text-xl mt-4'>Sign Up for free and get the latest tips.</h1>
            <button className=' text-xl bg-blue-900 p-3 px-3 mt-4 rounded-lg'>Sign up For Free</button>
        </div>

      </div>
      <div>
        <div className=' flex justify-between items-start px-52 gap-10'>
            {
                contactData.map((contact)=> (
                    <div className=' flex flex-col gap-5 text-center items-center w-[270px] my-10 shadow-lg p-10'>
                        <h1 className=' border-2 rounded-full w-12 h-12 flex justify-center items-center border-blue-800 '>{contact.icon}</h1>
                        <div>
                        <h1 className=' mb-2 font-bold text-xl'>{contact.title}</h1>
                        <h1 >{contact.content}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
        hi
      </div>
    </div>
  )
}

export default Contacts
