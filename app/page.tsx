import Carousel from '@/components/CarouselComponents/Carousel'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <div className="w-full grid justify-center">
        <section className="w-full px-6 md:px-20 py-20 flex">
          <div className="inline-flex max-xl:flex-col w-full px-5 justify-between">
            <div className="flex flex-col justify-center">
              <h2 className="head-sub-text font-serif"> Hi I am </h2>
              <h1 className="head-text font-serif"> Sean Koh </h1>
              <h2 className="head-sub-text font-mono"> This is my <u> personal website.</u>
              </h2>
            </div>
            <div className="hidden sm:block justify-center">
              <Image 
                src="/assets/icons/computer.svg"
                alt="computer"
                width={150}
                height={150}
                className=""
              />
            </div>
            
          </div>
        </section>
        <section className="w-full px-6 md:px-20  flex">
          
        <Carousel/>
        
        </section>
      </div>
    </>
    


   )
}
