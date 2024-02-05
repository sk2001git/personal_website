"use client";
import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import CarouselCard from "./CarouselCard";
import Arrow from './Arrow';
import { Project } from '@/types/project';



interface CarouselProps {
  masterProjects: Project[];
}

const Carousel = ({ masterProjects } : CarouselProps) => {

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
            {masterProjects?.map((project: Project) => (
              <div className="embla__slide" key={project._id}>
                <CarouselCard project={project} />
              </div>
            ))};  
          </div>
        </div>  
      </div>
      <Arrow onClick={scrollNext} left={false} disabled={false} />
    </div>
  )
}



export default Carousel;
