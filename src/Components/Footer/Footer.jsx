import React from 'react'
import ".././Footer/Footer.css"
const Footer = () => {
    return (
        <div className='Footeer'>
            <div className="container">
                <div className=" block md:flex">

                
            <div className="footer_bottom1">
                
               <img className='py-3' width="160px" src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png" alt="" />
               <p className='text-xs md:text-base py-3'>Subscribe to email alerts. We promise not to spam your inbox.</p>
              <div className='input_btn'>

              
              <input type="text" placeholder='Email Address*' />
               <button>SUBSCRIBE</button>
               </div>
                </div>
                <div className="footer_bottom">
<img className='rounded-md py-4' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bring_Your_World_On_Your_Wrist_446x360_66921214-c5ee-4bda-a433-f52b1c2124d4_445x.jpg?v=1672749745" alt="" />
                </div>
               
              
            </div>
            </div>
        </div>
    )
}

export default Footer