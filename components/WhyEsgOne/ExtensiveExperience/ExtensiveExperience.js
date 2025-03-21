import Image from "next/image"
import React from "react"

const ExtensiveExperience = () => {
  return (
    <div className="flex justify-center  md:my-20 px-4" data-aos="fade-up">
      <div className="bg-[#D0EAE2] py-4 md:py-6 px-6 md:px-10 rounded-3xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Image
          src="/whyEsgOne/icon01.svg"
          width={142}
          height={142}
          alt="Extensive Experience"
        />
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-3 text-center md:text-left">
          <h3 className="text-[#043929] text-xl md:text-2xl font-semibold">
            Extensive Experience
          </h3>
          <div className="border-b border-dashed border-cms-secondary-gray w-full" />
          <p className="text-base md:text-lg text-[#171717]">
            Over 30 brands and 750+ factories across sectors such as{" "}
            <br className="hidden md:block" /> Apparel, Agri-Commodity, and
            Manufacturing
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExtensiveExperience
