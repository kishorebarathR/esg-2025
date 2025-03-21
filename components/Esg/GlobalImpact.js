"use client"

import { globalImpact } from "@/utils/data"
import Image from "next/image"
import React from "react"
import CountUp from "react-countup"

// Custom format function for Indian numbering system
const formatIndianNumber = (value) => {
  return value.toLocaleString("en-IN") + "+"
}

const GlobalImpact = () => {
  return (
    <div className="flex flex-col items-center gap-7 py-6">
      <h2
        className="text-cms-primary font-semibold lg:text-3xl text-2xl "
       
      >
        Our Global Impact
      </h2>
      <p className=" text-center text-md">We have worked with</p>
      {/* <div className="border-2 border-ce-purple w-20 mb-4" /> */}
      <ul className="grid lg:grid-cols-3 grid-cols-2 justify-center lg:gap-6 gap-2 mt-0 p-4 lg:p-0">
        {globalImpact.map((item, index) => {
          return (
            <li
              key={index}
              className="border-b-8 border-b-cms-primary rounded-xl"
            
            >
              <div className="flex flex-col items-center lg:gap-2 gap-1 p-5 rounded-lg lg:w-[280px] lg:h-[260px] h-[220px] bg-[#F8F2FC] w-full">
                <div className="flex-grow-0">
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt="global"
                    className="lg:h-[70px] h-[50px]"
                  />
                </div>
                <div className="border-b border-black border-dashed w-full my-3" />
                <h3 className="text-ce-purple lg:text-5xl font-bold text-3xl">
                  <CountUp
                    end={parseInt(item.count)}
                    duration={2.5}
                    suffix="+"
                    formattingFn={formatIndianNumber}
                    className="text-[#622F88]"
                  />
                </h3>
                <p className="text-[#5C5C5C] lg:text-xl text-center text-sm">
                  {item.title}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="text-center lg:w-7/12 lg:py-2 p-6 lg:p-0">
        <h2
          className="text-cms-primary font-semibold lg:text-3xl lg:py-6 py-4 text-xl"
         
        >
          Building a Sustainable Future
        </h2>
        <p className="text-lg font-lg">
          We aim to make sustainability integral to business operations,
          fostering environments where transparency, accountability, and ethical
          sourcing lead to equitable growth and resilience in the economy.
        </p>
      </div>
    </div>
  )
}

export default GlobalImpact
