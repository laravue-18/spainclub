import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-full md:w-1/3 xl:w-1/4 mb-4 md:mb-0">
            <div className="w-24 mb-12">
              <img src="/image/logo-text.png" alt="" />
            </div>
            <p className="">
              NightLife
            </p>
            <p className="">Restaurants</p>
            <p className="">Daytime leisure</p>
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-4">
            <div className="w-28">
              <img src="/image/logo/marina-club-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/mya-club-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/lumbracle-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/committee-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/akuarela-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/la-diva-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/tatel-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/convento-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/on-air-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/sabbia-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/tanit-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/atenea-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/ruzafa-dark.jpg" alt="" className="w-full" />
            </div>
            <div className="w-28">
              <img src="/image/logo/calablava-dark.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <p className='text-center pt-6'>&copy; {new Date().getFullYear()} Spain Club. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer