import Image from 'next/image'

import React, { useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper";

export default function SecPartners() {
  return (
    <section className="-mt-10 relative" id="partners">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <h2 className="font-bold text-4xl font-mulish mb-5">PARTNERS</h2>
      </div>
      <div className="p-5 md:p-10 lg:p-10">
        <Swiper
            spaceBetween={20}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 2,
              },
              480: {
                width: 480,
                slidesPerView: 3,
              },
              600: {
                width: 600,
                slidesPerView: 3,
              },
              768: {
                width: 768,
                slidesPerView: 4,
              },
              900: {
                width: 900,
                slidesPerView: 4,
              },
              1024: {
                width: 1024,
                slidesPerView: 5,
              },
              1200: {
                width: 1200,
                slidesPerView: 5,
              },
            }}
        >
          <SwiperSlide>
            <Image 
              src="/partners/alkademi-dark.png"
              alt="Alkademi"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/Bukalapak.png"
              alt="Bukalapak"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/DailySocial.png"
              alt="DailySocial"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/geekHunter.png"
              alt="DailySocial"
              height={40}
              width={120}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/tokopedia.png"
              alt="DailySocial"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/Telkom.png"
              alt="DailySocial"
              height={30}
              width={110}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/tech-in-asia.jpg"
              alt="DailySocial"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/aws.png"
              alt="DailySocial"
              height={25}
              width={70}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/microsoft.jpg"
              alt="Microsoft"
              height={50}
              width={150}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/Nivea.png"
              alt="Nivea"
              height={25}
              width={75}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/livintelkom.jpg"
              alt="Livin in Telkom"
              height={25}
              width={75}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/jakbee.png"
              alt="Jakbee"
              height={50}
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/phpid.png"
              alt="PHP ID"
              height={50}
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/devC.jpg"
              alt="Developer Circle"
              height={50}
              width={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image 
              src="/partners/womenintech.png"
              alt="Women in Tech"
              height={50}
              width={100}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <style>
        {`
        .swiper-wrapper{
          text-align: -webkit-center;
        }
        `}
      </style>
    </section>
  )
}