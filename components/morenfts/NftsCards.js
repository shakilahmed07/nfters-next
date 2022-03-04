import Image from 'next/image'
import DiscoverOne from "../../public/discover-1.png"
import DiscoverTwo from "../../public/discover-2.png"
import DiscoverThree from "../../public/discover-3.png"
import CollectionThree from "../../public/collection-3.png"
import EthereumOne from "../../public/ethereum-1.png"
import EllipseOne from "../../public/Ellipse-1.png"
import EllipseTwo from "../../public/Ellipse-2.png"
import EllipseThree from "../../public/Ellipse-3.png"
import EllipseFour from "../../public/Ellipse-4.png"


const NftsCards = () => {
  return (
    <div className='grid sm:grid-cols-4 gap-4 py-5'>
        <div className='bg-white shadow-sm hover:shadow-md rounded-md p-4 relative'>
            <div className='mb-4'>
                <Image src={DiscoverOne} alt="" height={"300px"} width={"300px"} />
            </div>
            {/* avatar college group photo */}
            <div className='flex absolute sm:top-[62%] sm:left-[8%]  top-[61%] left-[8%]'>
                <div>
                <Image src={EllipseOne} alt=""/>
                </div>
                <div className='-ml-4'>
                <Image src={EllipseTwo} alt="" />
                </div>
               <div className='-ml-4'>
               <Image src={EllipseThree} alt="" />
               </div>
               <div className='-ml-4'>
               <Image src={EllipseFour} alt="" />
               </div>
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
                    <p className='font-semibold text-[#371C87] cursor-pointer'>place a bid</p>
                </div>
            </div>
        </div>
        {/* second */}
        <div className='bg-white shadow-sm hover:shadow-md rounded-md p-4 relative'>
            <div className='mb-4'>
                <Image src={DiscoverTwo} alt="" height={"300px"} width={"300px"} />
            </div>
            {/* avatar college group photo */}
            <div className='absolute top-[62%] left-[8%] flex'>
                <div>
                <Image src={EllipseOne} alt=""/>
                </div>
                <div className='-ml-4'>
                <Image src={EllipseTwo} alt="" />
                </div>
               <div className='-ml-4'>
               <Image src={EllipseThree} alt="" />
               </div>
               <div className='-ml-4'>
               <Image src={EllipseFour} alt="" />
               </div>
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
                    <p className='font-semibold text-[#371C87] cursor-pointer'>place a bid</p>
                </div>
            </div>
        </div>
       {/* third */}
       <div className='bg-white shadow-sm hover:shadow-md rounded-md p-4 relative'>
            <div className='mb-4'>
                <Image src={DiscoverThree} alt="" height={"300px"} width={"300px"} />
            </div>
            {/* avatar college group photo */}
            <div className='absolute top-[62%] left-[8%] flex'>
                <div>
                <Image src={EllipseOne} alt=""/>
                </div>
                <div className='-ml-4'>
                <Image src={EllipseTwo} alt="" />
                </div>
               <div className='-ml-4'>
               <Image src={EllipseThree} alt="" />
               </div>
               <div className='-ml-4'>
               <Image src={EllipseFour} alt="" />
               </div>
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
                    <p className='font-semibold text-[#371C87] cursor-pointer'>place a bid</p>
                </div>
            </div>
        </div>
        {/* four */}
        <div className='bg-white shadow-sm hover:shadow-md rounded-md p-4 relative'>
            <div className='mb-4'>
                <Image src={CollectionThree} alt="" height={"300px"} width={"300px"} />
            </div>
            {/* avatar college group photo */}
            <div className='absolute top-[62%] left-[8%] flex'>
                <div>
                <Image src={EllipseOne} alt=""/>
                </div>
                <div className='-ml-4'>
                <Image src={EllipseTwo} alt="" />
                </div>
               <div className='-ml-4'>
               <Image src={EllipseThree} alt="" />
               </div>
               <div className='-ml-4'>
               <Image src={EllipseFour} alt="" />
               </div>
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
                    <p className='font-semibold text-[#371C87] cursor-pointer'>place a bid</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NftsCards