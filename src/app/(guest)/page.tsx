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
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Instagram } from 'lucide-react';
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"


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

  const arrivals = [
    {
      img: '/image/bg/1.jpg',
      title: 'Touché Events',
      subtitle: "Touché Events brings the city's most exclusive and vibrant nights, combining music, style, and unparalleled energy. Every Thursday, Tatel Valencia and La Diva transform into the stage for the university community's favorite party, where the atmosphere and music create the perfect combination.",
      link_url: 'https://thetoucheevents.com/',
      link_text: 'I want to participate'
    },
    {
      img: '/image/bg/2.jpg',
      title: 'Atenea: a unique gastronomic experience in Valencia',
      subtitle: "Enjoy a unique meal at Atenea, a rooftop restaurant in Valencia offering innovative dishes in an elegant setting. Book your table easily through our platform and ensure a high-quality culinary experience for any occasion.",
      link_url: '/atenea-sky-valencia/',
      link_text: 'Book & Read more'
    },
    {
      img: '/image/bg/3.jpg',
      title: 'Sabbia Valencia',
      subtitle: "Enjoy a gastronomic and sensorial experience where innovative cuisine merges with a sophisticated atmosphere and the finest entertainment. Enjoy dinner overlooking the Mediterranean while dinner shows elevate the evening with music, entertainment, and incomparable energy. Reserve your table and immerse yourself in a unique evening by the sea.",
      link_url: '/sabbia_valencia/',
      link_text: 'Book & Read more'
    },
    {
      img: '/image/bg/4.jpg',
      title: "Book your VIP Night at Valencia's Nightclubs",
      subtitle: "Make your night unique and special with our VIP reservations at Valencia's most select clubs. Book now and get ready for a night filled with glamour, music, and unparalleled fun at Valencia's most outstanding clubs. Your VIP night awaits; make every moment count!",
      link_url: '/vip_valencia/',
      link_text: 'I want a VIP party'
    },
  ]

  const faqs = [
    {
      q: 'Who are we?',
      a: 'At Spain Club Promoter , we are experts in event planning and corporate events. We connect with the best restaurants and offer ideal venues for every occasion. Are you looking for exclusivity and fun? Valencia awaits to exceed all your expectations. Plan your next event and turn it into an epic celebration !'
    },
    {
      q: "Ready for Unique Experiences with Spain Club Promoter?",
      a: "At Spain Club Promoter, we transform every occasion into something exceptional. Whether you want to rock the best clubs, indulge in outstanding restaurants and pubs, or participate in unique experiences, we have the perfect setting. We're also experts in corporate event planning and offer the most sophisticated event spaces in Valencia. Make sure you experience unforgettable moments!"
    },
    {
      q: "What types of events can I organize in Valencia?",
      a: "In Valencia, you can organize a wide variety of events, from corporate events such as product launches, conventions, and team meetings to social events such as weddings, birthdays, and private parties. You can also find unique experiences such as wine tastings, guided city tours, and cooking workshops."
    },
    {
      q: "How can I find the perfect restaurant for my event in Valencia?",
      a: "Valencia offers a wide variety of restaurants for all tastes and budgets. You can find fine dining, traditional restaurants, restaurants with outdoor seating, and restaurants with live music. At Spain Club Promoter, we can help you find the perfect restaurant for your event, taking into account your needs and budget."
    },
    {
      q: "What are the best nightclubs in Valencia?",
      a: "Valencia has a vibrant nightlife with a wide variety of clubs for all tastes. You can find clubs playing electronic music, Latin music, pop music, and rock music. At Spain Club Promoter, we can help you find the perfect club for your night out, taking into account your musical preferences."
    },
    {
      q: "Ready for Memorable Events in Valencia?",
      a: "Valencia awaits to transform your meetings into memorable events. Don't wait any longer to discover how we can make your moments truly significant!"
    },
    {
      q: "How can I organize a corporate event in Valencia?",
      a: "At Spain Club Promoter, we are experts in organizing corporate events in Valencia. We have a team of professionals who will take care of everything, from selecting the ideal venue to decoration, music, and entertainment. We offer a comprehensive service to ensure your event is a resounding success."
    },
    {
      q: "What types of event spaces can I find in Valencia?",
      a: "Valencia offers a wide variety of event spaces for all types of events. You can find event halls, hotels with event spaces, gardens, terraces, and unique venues. At Spain Club Promoter, we can help you find the perfect venue for your event, taking into account your needs and budget."
    },
    {
      q: "How much does it cost to organize an event in Valencia?",
      a: "The cost of organizing an event in Valencia varies depending on the type of event, the number of guests, the venue chosen, and the services contracted. At Spain Club Promoter, we offer a personalized quote so you can plan your event with peace of mind."
    }
  ]

  return (
    <>
      {/* Types */}
      <section className="grid grid-cols-1 lg:grid-cols-3 text-white bg-black pt-12">
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
      <section className="py-12 xl:py-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl xl:text-3xl font-semibold mb-10">
            Your place to find and enjoy the best experiences, nightlife, events, and cuisine in Valencia.
          </h2>
          <div className="text-3xl xl:text-5xl text-secondary font-bold mb-24">
            <Typewriter
              options={{
                strings: ["What's next?", "Come on?", "Choose your plan!"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h2 className="text-2xl xl:text-3xl font-semibold mb-6">
            We collavorate with the best venues in Valencia, including:
          </h2>
          
          <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 2000})]}>
            <CarouselContent>
              {
                logos.map((logo, index) => (
                  <CarouselItem className="basis-1/3 xl:basis-1/6" key={index}>
                    <img src={logo.img} alt="" />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>
      </section>
      {/* Parallax */}
      <section className="h-40 xl:h-100 bg-[url(/image/valencia-bg.jpg)] bg-cover bg-center bg-fixed"></section>
      {/* Why us */}
      <section className="py-12 xl:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl text-center font-bold mb-8">Why us?</h3>
          <p className="text-center max-w-200 mx-auto font-semibold mb-8">
            At Spain Club, we take the nightlife and dining experience to the next level. With years of experience in the industry, we collaborate with Valencia's most exclusive venues to offer you premium events, VIP access, and unique benefits.
          </p>
          <div className="flex flex-wrap justify-center mb-12 xl:mb-20">
            {awards.map( (a, index) => (
              <div className="text-center w-1/2 xl:w-1/5 p-8" key={index}>
                <span className="font-tanpearl text-secondary text-3xl font-semibold">{ a.value }</span>
                <p className="">{ a.title }</p>
              </div>
            ))}
          </div>
          <h3 className="text-3xl text-center font-bold mb-8">Join our club!</h3>
          <div className="text-center">
            <a href="https://www.instagram.com/spainclubpromoter">
              <Button>
                <Instagram />
              </Button>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb4dvqKGU3BERXXOpD3j" className="">
              <Button className="ml-4">
                <WhatsAppIcon/>
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 xl:py-20">
        <h3 className="text-3xl text-center font-bold mb-16">New arrivals. Don't miss them!</h3>
        <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 3000})]}>
          <CarouselContent className="relative ml-0">
            {arrivals.map((a, index) => (
              <CarouselItem key={index} className="pl-0">
                <a target="_blank" href={a.link_url} className="">
                  <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }}>
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
                    <div className="relative h-100 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-5xl font-bold mb-8">{ a.title }</h3>
                        <p className="text-lg font-medium max-w-3xl mx-auto mb-8">{ a.subtitle }</p>
                        <Button className="bg-transparent border border-white text-xl uppercase px-8 py-6 font-semibold">{a.link_text}</Button>
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8"/>
          <CarouselNext className="right-8"/>
        </Carousel>
      </section>
      {/* Faq */}
      <section className="container mx-auto py-12 xl:py-20 px-4">
        <h3 className="text-3xl text-center font-bold mb-16">Frequently Asked Questions</h3>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className=" text-xl font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  {f.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
          
        </Accordion>
      </section>
      {/* Subscribe */}
      <section className="flex justify-center py-12 xl:py-20 px-4">
          <div className="rounded-lg bg-gray-100 p-16">
            <h3 className="text-3xl text-center font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-center mb-8">Receive exclusive content, events, and benefits before anyone else.</p>
            <Input type="text" placeholder="Name" className="mb-4"/>
            <Input type="email" placeholder="Email" className="mb-4" />
            <Button>I'm in</Button>
          </div>
      </section>
    </>
  );
}
