import Image from "next/image";

const CarouselCards = () => {
  

  return (
    <div className="border border-black  flex pt-5 justify-center">
        <a className="group h-1/5" href="/">
          <div className="flex justify-center">
            <Image 
              className=""
              src="/assets/images/AppIcon.png"
              width={100}
              height={100}
              alt="Feelings Overflow"
            />
          </div>


            <div className="mt-10">
              <h3 className="flex justify-center text-xl font-semibold text-black group-hover:text-blue-600">
                Feelings Overflow
              </h3>
              <p className="mt-3 text-gray-800  flex justify-center">
                Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval
              </p>
              <p className="flex justify-center mt-2 gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Read more
              </p>
            </div>
      </a>
    </div>
    
  );
}

export default CarouselCards