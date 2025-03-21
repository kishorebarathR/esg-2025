import { solutionsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Solutions = () => {
  return (
    <div className="p-4 md:p-10 flex justify-center">
      <ul className="flex flex-col md:flex-row flex-wrap gap-16 lg:gap-5 justify-center">
        {solutionsData.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-[#EFFAF7] w-full md:w-[414px] relative rounded-lg"
              data-aos={item.animation}
            >
              <div className="pt-10 pb-5 px-5">
                <h2 className="text-xl md:text-2xl text-[#622F88] font-semibold">
                  {item.title1}
                </h2>
                <h2 className="text-xl md:text-2xl text-[#239F79] font-semibold">
                  {item.title2}
                </h2>
                <ul className="flex flex-col gap-4 mt-4">
                  {item.content.map((data, index) => {
                    return (
                      <li key={index}>
                        <p className="text-base md:text-lg text-[#171717]">
                          <span className="text-lg md:text-xl font-semibold text-[#05AC8D]">
                            {data.title}
                          </span>{" "}
                          {data.desc}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="absolute -top-12 md:-top-16 right-4 md:right-8">
                <Image
                  src={item.iconUrl}
                  width={90}
                  height={90}
                  alt={item.title1}
                  className="w-20 h-20 md:w-28 md:h-28"
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Solutions
