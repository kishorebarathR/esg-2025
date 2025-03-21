import React from "react"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="bg-[#F9FDFC] mt-16">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="lg:w-[60%] py-10 lg:py-0">
          <div className="flex flex-col justify-end items-end">
            {/* First Image (Hidden on Desktop) */}
            <div className="w-[90%] mt-14 bottom-0 lg:hidden">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg"
                className="w-[100%] bottom-0 shadow-md"
                width={1000}
                height={500}
                alt="Arrow"
              />
            </div>

            {/* Main Text */}
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-10 pt-10 lg:w-[90%]"
             
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>

            {/* Second Image (Hidden on Mobile) */}
            <div className="w-[90%] mt-14 bottom-0 hidden lg:block">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg"
                className="w-[30%] bottom-0 shadow-md"
                width={1000}
                height={500}
                alt="Arrow"
              />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-[35%]">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/BGBanner.png"
            className="h-[80%] w-[100%] scale-x-[-1] lg:scale-x-[1]"
            width={1000}
            height={500}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  )
}
