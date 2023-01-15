import house from '../assets/house/1.jpg'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'




export const ListingCard = () => {
    return (
        <div className="w-[385px]  ">
            <img src={house} alt="house" className='h-[200px] w-full rounded-md' />
            <div className="flex flex-col gap-y-4 px-4 items-baseline bg-white border border-gray-300 py-6 rounded-md relative ">
                <span className='text-[#5B4DFF] font-semibold'>$90,000</span>
                <h3 className='text-[#120F33] font-semibold  '>2 Floor House in Aqary Street</h3>
                <p className='flex gap-x-2 p-0 m-0 items-center '><HiOutlineLocationMarker className='text-[#5B4DFF]' />   <span className='text-[#4D5461] text-sm'> Aqary Street, Sulaymaniyah</span></p>
                <span className='bg-[#5B4DFF1A] text-[#5B4DFF] px-3 py-1 rounded-md'>Sale</span>

                <hr className='w-4/5 mx-auto' />
                <div className="flex justify-between  w-full">
                    <p className='flex gap-x-1 items-center text-[#7F7D8C]  text-sm'><span className='bg-[#5B4DFF1A] text-[#5B4DFF] px-3 py-1 rounded-md'><AiOutlineHome /></span>2Bedrooms</p>
                    <p className='flex gap-x-1 items-center text-[#7F7D8C] text-sm'><span className='bg-[#5B4DFF1A] text-[#5B4DFF] px-3 py-1 rounded-md' ><AiOutlineHome /></span>1Bathroom</p>
                    <p className='flex gap-x-1 items-center text-[#7F7D8C] text-sm'><span className='bg-[#5B4DFF1A] text-[#5B4DFF] px-3 py-1 rounded-md'><AiOutlineHome /></span>200 m2</p>
                </div>
                <div className="absolute bg-[#5B4DFF] flex -top-7 -left-1 items-center gap-x-2 py-1 px-2 rounded-md">
                    <AiOutlineStar color='white' fill='white' />
                    <span className='text-white'>FEATURED</span>
                </div>
            </div>

        </div>
    )
}