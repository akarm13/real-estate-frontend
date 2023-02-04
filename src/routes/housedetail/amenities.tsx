import React from 'react'

const Amenities = () => {
  return (
    <div className='flex flex-col gap-6'>
    
    <h2 className='text-2xl font-semibold'>Amenities</h2>

    <div className='flex gap-4 w-[730px] flex-wrap'>

    <h3 className='text-primary-500 bg-slate-200 px-4 py-2 rounded-lg'>Parking</h3>

    <h3 className='text-primary-500 bg-slate-200 px-4 py-2 rounded-lg'>Heating and cooling systems</h3>

    <h3 className='text-primary-500 bg-slate-200 px-3 py-2 rounded-lg'>Internet and cable TV connectivity</h3>

    <h3 className='text-primary-500 bg-slate-200 px-4 py-2 rounded-lg'>Swimming pool</h3>
    
    <h3 className='text-primary-500 bg-slate-200 px-4 py-2 rounded-lg'>Fireplace</h3>

    <h3 className='text-primary-500 bg-slate-200 px-4 py-2 rounded-lg'>Solar panels</h3>


    </div>

    
   
    </div>
  )
}

export default Amenities