"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Home() {

  const logos = [
    {img: '/image/logo/akuarela-light.png'},
    {img: '/image/logo/atenea-light.png'},
    {img: '/image/logo/committee-light.png'},
    {img: '/image/logo/lumbrade-light.png'},
    {img: '/image/logo/mya-light.png'},
    {img: '/image/logo/ruzafa-light.png'},
    {img: '/image/logo/sabbia-light.png'},
    {img: '/image/logo/tatel-light.png'},
    {img: '/image/logo/touche-light.png'},
    {img: '/image/logo/vendetta-light.png'}
  ];

  const awards = [
    {title: 'of people have enjoyed our events', value: '1.2M'},
    {title: 'VIP reservations', value: '+5K'},
    {title: 'Followers on Instagram', value: '+10K'},
    {title: 'own events organized in the best venues', value: '+250'},
    {title: 'associated clubs and restaurants', value: '+20'}
  ];

  return (
    <>
      {/* Types */}
      <section className="grid grid-cols-1 lg:grid-cols-3 text-white">
        <Link href="/nightclubs-valencia">
          <div className="w-full bg-[url('/image/nightlife-bg.jpg')] bg-cover bg-center aspect-square flex items-center justify-center">
            <div className="text-center">
              <h6 className="text-4xl font-bold mb-6">Nightlife</h6>
              <p className="text-lg font-semibold">Dance at the top clubs in downtown and the marina.</p>
            </div>
          </div>
        </Link>
        <Link href="/restaurantes-valencia">
          <div className="w-full bg-[url('/image/restaurants-bg.jpg')] bg-cover bg-center aspect-square flex items-center justify-center">
            <div className="text-center">
              <h6 className="text-4xl font-bold mb-6">Restaurants</h6>
              <p className="text-lg font-semibold">Enjoy the best cuisine and unique settings.</p>
            </div>
          </div>
        </Link>
        <Link href="/daylife-valencia">
          <div className="w-full bg-[url('/image/daylife-bg.jpg')] bg-cover bg-center aspect-square flex items-center justify-center">
            <div className="text-center">
              <h6 className="text-4xl font-bold mb-6">Afternoon & Daylife</h6>
              <p className="text-lg font-semibold">Terraces, brunch, and music for plans with sun and flow.</p>
            </div>
          </div>
        </Link>
      </section>
      {/* Providers */}
      <section className="">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-6">
            Your place to find and enjoy the best experiences, nightlife, events, and cuisine in Valencia.
          </h2>
          <div className="text-center text-2xl">
            <Typewriter
              options={{
                strings: ["What's next?", "Come on?", "Choose your plan!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h2 className="text-3xl font-semibold mb-6">
            We collavorate with the best venues in Valencia, including:
          </h2>
          
          <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 2000})]}>
            <CarouselContent>
              {
                logos.map((logo, index) => (
                  <CarouselItem className="basis-1/6" key={index}>
                    <img src={logo.img} alt="" />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/* Parallax */}
      <section className="bg-[url(/image/valencia-bg.jpg)] bg-cover bg-center bg-fixed h-100"></section>
      {/* Why us */}
      <section className="">
        <div className="container mx-auto">
          <h3 className="text-3xl text-center">Why us?</h3>
          <p className="text-center max-w-200 mx-auto">
            At Spain Club, we take the nightlife and dining experience to the next level. With years of experience in the industry, we collaborate with Valencia's most exclusive venues to offer you premium events, VIP access, and unique benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-20">
            {awards.map( (a, index) => (
              <div className="text-center" key={index}>
                <span className="font-tanpearl">{ a.value }</span>
                <p className="">{ a.title }</p>
              </div>
            ))}
          </div>
          <h3 className="text-3xl text-center">Join our club!</h3>
          <div className="">

          </div>
        </div>
      </section>
    </>
  );
}
