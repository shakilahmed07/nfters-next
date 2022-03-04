import Image from 'next/image'
import DiscoverOne from "../../public/discover-1.png"
import DiscoverTwo from "../../public/discover-2.png"
import DiscoverThree from "../../public/discover-3.png"
import CollectionThree from "../../public/collection-3.png"
import EthereumOne from "../../public/ethereum-1.png"


const NftsCards = () => {
  return (
    <div className='grid grid-cols-4 gap-4 py-5'>
        <div className='bg-white shadow-md rounded-md p-4'>
            <div className='mb-4'>
                <Image src={DiscoverOne} alt="" height={"300px"} width={"300px"} />
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='font-semibold text-lg'>ArtCrypto</p>
                <div className='flex items-center justify-between text-sm border-b-2 border-gray-100 pb-2'>
                    <div className='flex space-x-2'>
                    <Image src={EthereumOne} alt="" />
                    <p className='text-[#3FAA60]'>0.25 ETH</p>
                    </div>
                    <p>1 of 321</p>
                </div>
                <div className='flex items-center justify-between text-sm pt-2'>
                    <p className='bg-[#DCDCDC] rounded-full px-4 py-1 text-[#371C87] font-semibold'>3h 40m 1s left</p>
                    <p className='font-semibold text-[#371C87]'>place a bid</p>
                </div>
            </div>
        </div>
        {/* second */}
        <div className='bg-white shadow-md rounded-md p-4'>
            <div className='mb-4'>
                <Image src={DiscoverTwo} alt="" height={"300px"} width={"300px"} />
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='font-semibold text-lg'>ArtCrypto</p>
                <div className='flex items-center justify-between text-sm border-b-2 border-gray-100 pb-2'>
                    <div className='flex space-x-2'>
                    <Image src={EthereumOne} alt="" />
                    <p className='text-[#3FAA60]'>0.25 ETH</p>
                    </div>
                    <p>1 of 321</p>
                </div>
                <div className='flex items-center justify-between text-sm pt-2'>
                    <p className='bg-[#DCDCDC] rounded-full px-4 py-1 text-[#371C87] font-semibold'>3h 40m 1s left</p>
                    <p className='font-semibold text-[#371C87]'>place a bid</p>
                </div>
            </div>
        </div>
       {/* third */}
       <div className='bg-white shadow-md rounded-md p-4'>
            <div className='mb-4'>
                <Image src={DiscoverThree} alt="" height={"300px"} width={"300px"} />
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='font-semibold text-lg'>ArtCrypto</p>
                <div className='flex items-center justify-between text-sm border-b-2 border-gray-100 pb-2'>
                    <div className='flex space-x-2'>
                    <Image src={EthereumOne} alt="" />
                    <p className='text-[#3FAA60]'>0.25 ETH</p>
                    </div>
                    <p>1 of 321</p>
                </div>
                <div className='flex items-center justify-between text-sm pt-2'>
                    <p className='bg-[#DCDCDC] rounded-full px-4 py-1 text-[#371C87] font-semibold'>3h 40m 1s left</p>
                    <p className='font-semibold text-[#371C87]'>place a bid</p>
                </div>
            </div>
        </div>
        {/* four */}
        <div className='bg-white shadow-md rounded-md p-4'>
            <div className='mb-4'>
                <Image src={CollectionThree} alt="" height={"300px"} width={"300px"} />
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='font-semibold text-lg'>ArtCrypto</p>
                <div className='flex items-center justify-between text-sm border-b-2 border-gray-100 pb-2'>
                    <div className='flex space-x-2'>
                    <Image src={EthereumOne} alt="" />
                    <p className='text-[#3FAA60]'>0.25 ETH</p>
                    </div>
                    <p>1 of 321</p>
                </div>
                <div className='flex items-center justify-between text-sm pt-2'>
                    <p className='bg-[#DCDCDC] rounded-full px-4 py-1 text-[#371C87] font-semibold'>3h 40m 1s left</p>
                    <p className='font-semibold text-[#371C87]'>place a bid</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NftsCards