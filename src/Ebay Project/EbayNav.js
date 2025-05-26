import { Bell, ShoppingCart } from 'lucide-react'
import React from 'react'

import { Link } from 'react-router-dom'
const Ebayhome = () => {
    const Firstnav = [
        
       { text:"Sign & Register",path:"/sign"},
       { text:"Daily Deals",path:"/Daily" },
       {text:"Brand Outlet",path:"/Brand"},
       { text:"Gift Cards",path:"./Gifts"},
       {text:"Help & Contact",path:"./Help"} 
        

  ]
  const SecondNav = [
    { text: "Sell", path: "/Sell" },
    { text: "WatchList", path: "/Watch" },
    { text: "My eBay", path: "/My" },
    { text: <Bell /> },
    { text: <ShoppingCart /> }
    
  ]
  return (
    <div>
      
          
          <div style={{display:"flex" , justifyContent:"space-between"}}>
              
              <div className='gap-3' style={{display:"flex"}}>
                  {Firstnav.map((items, index) => (
                 <div key={index}>     
                 <Link to={items.path}>

                        <li className='list-none' >{items.text}
                          
                        </li>
                      </Link>
                 </div>        

             ))}

              </div>
        <div  className=" gap-3" style={{display:"flex"}}>
          
          {SecondNav.map((items, index) => (
            <div key={index}>
              <Link to={items.path}>
                <li className='list-none'>{items.text}</li>
              </Link>
            </div>
          ))}
              </div>
</div>



    </div>
  )
}

export default Ebayhome