import { Reviews, Star } from '@mui/icons-material'
import React from 'react'
import img from "../../assets/images/Colorful-heels.jpg"
import im1 from "../../assets/images/black-boot.jpg"
import im2 from "../../assets/images/converse-boot.jpg"
import im3 from "../../assets/images/ladies-2.jpg"
import im4 from "../../assets/images/ladies-boot.jpg"
import im5 from "../../assets/images/ladies-boots.jpg"

const product = [
    {   
        id: "1",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "2",
        img: im1,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "3",
        img: im2,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "3",
        img: im3,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "4",
        img: im4,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "5",
        img: im5,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
]
const Products = () => {
  return (
    <div className=' px-28 py-14'>
      <div>
        <h1 className=' text-2xl text-blue-900 font-bold my-5'>Top Rated Products</h1>
        <div className=' grid grid-cols-3 gap-10'>
            {
            product.map((product)=> (
                <div className=' border p-7 rounded-md'>
                    <img src={product.img} alt="image" className=' w-[260px] h-[260px]' />
                    <div className=' text-gray-800  flex flex-col gap-2 pt-4'>
                        <h1 className=' font-bold text-[18px]'>{product.title}</h1>
                        <h1><Star className=' text-yellow-500'/>{product.review} (20 reviews)</h1>
                        <h1 className=' font-bold'>&#36;{product.price }</h1>
                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Products
