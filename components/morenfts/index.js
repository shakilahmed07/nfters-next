import React from 'react'
import NftsCards from './NftsCards'
import FilterBtn from "../../public/filter-results-button-1.png"
import Image from 'next/image'

const MoreNfts = () => {
  return (
    <div className='bg-[#D9E0EC33] '>
      <div className='w-10/12 mx-auto py-10 space-y-4'>
        <h2 className='font-extrabold text-3xl'>DISCOVER MORE NFTS</h2>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center justify-center space-x-4'>
            <p className='bg-[rgb(61,0,183)] rounded-full px-4 py-[4px] text-white'>All Categories</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Art</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Celebrities</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Gaming</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Sport</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Music</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px]'>Crypto</p>
            
          </div>
          <div className='flex items-center justify-center space-x-2 bg-[#DCDCDC] rounded-full px-4'>
            <div>
            <Image src={FilterBtn} alt="" height={"10px"} width={"12px"} />
            </div>
            <p className='text-[#371C87]'>All Filters</p>
          </div>
        </div>

        {/* NFTs Cards */}
        <NftsCards />
        <NftsCards />
        <NftsCards />
        <NftsCards />
      </div>
    </div>
  )
}

export default MoreNfts