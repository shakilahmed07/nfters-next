import React from 'react'
import NftsCards from './NftsCards'
import FilterBtn from "../../public/filter-results-button-1.png"
import Image from 'next/image'

const MoreNfts = () => {
  return (
    <div className='bg-[#D9E0EC33] '>
      <div className='w-10/12 mx-auto py-10 space-y-4'>
        <h2 className='font-extrabold text-3xl'>DISCOVER MORE NFTS</h2>
        <div className='sm:flex items-center justify-between text-sm hidden'>
          <div className='flex items-center justify-center space-x-4'>
            <p className='bg-[rgb(61,0,183)] hover:bg-[rgba(61,0,183,0.88)] rounded-full px-4 py-[6px] text-white cursor-pointer'>All Categories</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Art</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Celebrities</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Gaming</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Sport</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Music</p>
            <p className='bg-[#DCDCDC] rounded-full px-4 py-[3px] cursor-pointer'>Crypto</p>
          </div>
          <div className='flex items-center justify-center space-x-2 bg-[#DCDCDC] rounded-full px-4'>
            <div>
            <Image src={FilterBtn} alt="" height={"10px"} width={"12px"} />
            </div>
            <p className='text-[#371C87] cursor-pointer'>All Filters</p>
          </div>
        </div>

        {/* NFTs Cards */}
        <NftsCards />
        <NftsCards />
        <NftsCards />
        <NftsCards />
        <h2 className='text-center text-[#371C87] border-2 rounded-full w-[150px] py-2 mx-auto border-[#371C87] font-semibold cursor-pointer'>MORE NFTS</h2>
      </div>
    </div>
  )
}

export default MoreNfts