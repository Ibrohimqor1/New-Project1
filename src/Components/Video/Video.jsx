import React from 'react'

const Video = () => {
  return (
    <div >
        <div className="videos h-36 md:h-96  bg-white">
            <div className="card bg-white">
               <iframe className=' h-full  bg-white' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_E5O_Qsp0eX18ZzXlX_qxR_25.mp4" frameborder="0"></iframe>
           
            </div>
            <div className="card ">
               <iframe className='h-full' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_1ch3KWqawjjIESKccleyP.mp4" frameborder="0"></iframe>
            </div>
            <div className="card">
               <iframe className='h-full' src=" https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_m6ev9s9oqR1mGSeNEOK5k.mp4"rameborder="0"></iframe>
            </div>
            <div className="card">
               <iframe className='h-full' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_gaPFpebwiNo_VVd6ID37b.mp4" frameborder="0"></iframe>
            </div>
            <div className="card">
               <iframe className='h-full' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_W1e9Da4jGTW4O_ypIRex7.mp4" frameborder="0"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Video