"use client";
import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import CarouselCard from "./CarouselCard";
import Arrow from './Arrow';

const Carousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Can set disabled

 

  return (
    <div className="inline-flex px-2"> 
      <Arrow onClick={scrollPrev} left={true} disabled={false} />  
      <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <CarouselCard />
          </div>
          <div className="embla__slide">
            <CarouselCard />
          </div>

          </div>
        </div>
      
      </div>
      <Arrow onClick={scrollNext} left={false} disabled={false} />
    </div>
  )
}



export default Carousel;
