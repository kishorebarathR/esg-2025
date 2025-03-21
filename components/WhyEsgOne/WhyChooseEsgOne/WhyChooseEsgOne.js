import Image from "next/image"
import React from "react"

const WhyChooseEsgOne = () => {
  return (
    <div
      className="flex flex-col items-center gap-3 md:gap-5 px-4 md:px-8"
      data-aos="fade-up"
    >
      <h1 className="text-3xl md:text-5xl text-center">
        Why Choose{" "}
        <span className="text-cms-primary-green font-semibold">Us?</span>
      </h1>
      <p className="text-xl md:text-2xl text-cms-primary text-center font-semibold">
        Comprehensive Expertise
      </p>
      <Image
        src="/whyEsgOne/image01.png"
        width={1000}
        height={500}
        alt="image01"
        className="w-full md:w-3/4 mt-4 md:mt-5 hidden md:block"
      />
      <Image
        src="/whyEsgOne/mImage01.png"
        width={500}
        height={1000}
        alt="image02"
        className="w-full md:w-3/4 mt-4 md:mt-5 block md:hidden"
      />
    </div>
  )
}

export default WhyChooseEsgOne
