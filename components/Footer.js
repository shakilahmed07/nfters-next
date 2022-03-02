const Footer = () => {
  return (
    <div className='grid grid-cols-4 gap-4 py-10 w-10/12 mx-auto'>
      <div className="space-y-2">
        <p className="font-extrabold text-2xl">NFTERS</p>
        <div>
          <p className="text-sm text-gray-500 w-10/12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut fuga incidunt ea quibusdam fugit adipisci.</p>
          <div className="py-4 flex">
            <icon>f</icon>
            <icon>t</icon>
            <icon>i</icon>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-4">Market Place</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500">All NFTs</li>
          <li className="text-sm text-gray-500">New</li>
          <li className="text-sm text-gray-500">Art</li>
          <li className="text-sm text-gray-500">Sports</li>
          <li className="text-sm text-gray-500">Utility</li>
          <li className="text-sm text-gray-500">Music</li>
          <li className="text-sm text-gray-500">Domain Name</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-4">My Account</p>
        <ul className="space-y-2">
          <li className="text-sm text-gray-500">Profile</li>
          <li className="text-sm text-gray-500">Favorite</li>
          <li className="text-sm text-gray-500">My Collections</li>
          <li className="text-sm text-gray-500">Setting</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold mb-4">Stay In The Loop</p>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia adipisci animi? Doloribus alias soluta sed quas recusandae! Non, debitis?</p>
        <div className="flex">
        <input type="text" placeholder="Enter Your Email Address" className="pl-4 rounded-3xl placeholder:text-gray-300 border-2 outline-none" />
          <button className="bg-[rgb(61,0,183)] text-white rounded-3xl text-sm font-semibold">Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Footer