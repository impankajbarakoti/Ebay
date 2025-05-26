import React from 'react'
import Logo from "./ebay.png"
import { Search } from 'lucide-react'

const EbayNav2 = () => {
   
  return (
    <div>
        <div className='flex items-center'>
              <img className=" w-28 h-20 m-3 p-1" src={Logo} alt="Logo" />
              <div className='border border-black rounded-3xl h-12 p-2 mt- flex  place-items-center'>
                  <Search />  <input className='border-none outline-none w-96 ' type="search" placeholder='Search For Everything' />
                  <select className=' border-l p-1 pl-5 py-[7px] outline-none border-black'>
                      
                      <option value="Select">Select</option>
                      <option value="mobile">Mobile Phone</option>
                      <option value="mobile">Mobile Phone</option>
                      <option value="laptop">Laptop</option>
                      <option value="headphones">Headphones</option>
                      <option value="smartwatch">Smart Watch</option>
                      <option value="camera">Camera</option>
                      <option value="shoes">Shoes</option>
                      <option value="tshirt">T-Shirt</option>
                      <option value="backpack">Backpack</option>
                      <option value="refrigerator">Refrigerator</option>
                      <option value="microwave">Microwave Oven</option>
</select>

                 
              </div> 
              
        </div>
    </div>
  )
}

export default EbayNav2
