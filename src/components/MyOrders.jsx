import React from 'react'

export default function MyOrders() {
  return (
    <div className=" max-w-4xl bg-white pb-44 pl-0 p-8 pt-0">
      <div className="bg-white rounded-xl shadow-lg p-16 relative flex flex-col items-center"> 
      <p>You haven't placed any orders yet. </p>
      <p>We can't wait to have you as a customer.</p>
      <p className='mt-5 font-semibold'>Take a look at our products here</p>
      <button className='px-6 py-2 text-white text-xs mt-8 shadow-lg' style={{ backgroundColor: "#1B2B65" }}>View Products</button>
    </div>
    </div>
  )
}
