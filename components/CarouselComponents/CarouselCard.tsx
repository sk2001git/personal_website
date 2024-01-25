import Image from 'next/image'

const CarouselCard = () => {
  //TODO: Change the hyperlink reference as necessary
  //TODO: Create parameter to accept data as props to map title description
  return (
    
    
    <div className="group flex flex-col h-full bg-white border-2 border-grey shadow-sm rounded-xl max-w-full" >
    <div className="h-52 flex flex-col justify-center items-center bg-white rounded-t-xl">
      <Image 
        src="/assets/images/AppIcon.png"
        width={100}
        height={100}
        alt={"test"}
      >
      </Image>
     
    </div>
    <div className="p-4 md:p-6 ">
      <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
        Atlassian API
      </span>
      <h3 className="text-xl font-semibold text-gray-800">
        Atlassian
      </h3>
      <p className="mt-3 text-gray-500">
        A software that develops products for software developers and developments.
      </p>
    </div>
    <div className="mt-auto flex border-t border-grey divide-x divide-grey">
      <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 " href="#">
        View sample
      </a>
      <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50" href="#">
        View API
      </a>
    </div>
  </div>
  )
}

export default CarouselCard