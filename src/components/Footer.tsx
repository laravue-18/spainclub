import React from 'react'

const Footer = () => {
  const venues = [
    {img: '/image/logo/marina-club-dark.jpg'},
    {img: '/image/logo/mya-club-dark.jpg'},
    {img: '/image/logo/lumbracle-dark.jpg'},
    {img: '/image/logo/committee-dark.jpg'},
    {img: '/image/logo/akuarela-dark.jpg'},
    {img: '/image/logo/la-diva-dark.jpg'},
    {img: '/image/logo/tatel-dark.jpg'},
    {img: '/image/logo/convento-dark.jpg'},
    {img: '/image/logo/on-air-dark.jpg'},
    {img: '/image/logo/sabbia-dark.jpg'},
    {img: '/image/logo/tanit-dark.jpg'},
    {img: '/image/logo/atenea-dark.jpg'},
    {img: '/image/logo/ruzafa-dark.jpg'},
    {img: '/image/logo/calablava-dark.jpg'},
  ]
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container px-4 mx-auto">
        <div className="flex">
          <div className="md:w-1/3 xl:w-1/4 mb-4 md:mb-0">
            <div className="w-24 mb-4 xl:mb-12">
              <img src="/image/logo-text.png" alt="" />
            </div>
            <p className="">
              NightLife
            </p>
            <p className="">Restaurants</p>
            <p className="">Daytime leisure</p>
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-4">
            {venues.map((v, i) => (
              <div className="w-1/4" key={i}>
                <img src={v.img} alt="" className="w-full" />
              </div>
            ))}
          </div>
        </div>
        <p className='text-center pt-6'>&copy; {new Date().getFullYear()} Spain Club. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer