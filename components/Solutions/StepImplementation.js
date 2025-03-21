import { businessData, implementationData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const BusinessBenefits = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-5 mb-16 px-4 md:px-0">
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#622F88] text-center">
        4-Step Implementation
      </h2>

      <div className="flex justify-center mt-5 w-full relative">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {implementationData.map((item, index) => {
            return (
              <li
                key={index}
                className={`pb-10 lg:pb-0 lg:m-5 border-b-4 md:border-none ${
                  index === businessData.length - 1 ? "border-b-0" : ""
                }`}
                data-aos={item.animation}
              >
                <div className="flex flex-col-reverse md:flex-row items-center gap-4">
                  <div
                    className={`flex flex-col w-full md:w-[420px] ${
                      index % 2 === 0 ? "md:text-right" : "md:order-1"
                    }`}
                  >
                    <h3
                      className={`text-[#05AC8D] font-semibold text-lg md:text-xl ${
                        index % 2 === 0
                          ? "md:text-right text-center"
                          : "md:text-left text-center"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-[#171717] text-lg md:text-base ${
                        index % 2 === 0
                          ? "md:text-right text-center"
                          : "md:text-left text-center"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <Image
                      src={item.iconUrl}
                      width={80}
                      height={80}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24"
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="absolute top-1/2 hidden lg:block">
          <Image
            src="/solutions/business/rectangle01.svg"
            width={696}
            height={7}
            className="rectangle w-[500px] h-[7px]"
            alt="horizontal-line"
          />
        </div>
        <div className="absolute top-8 hidden lg:block">
          <Image
            src="/solutions/business/rectangle02.svg"
            width={7}
            height={374}
            className="rectangle h-[250px] w-[7px]"
            alt="vertical-line"
          />
        </div>
      </div>
    </div>
  )
}

export default BusinessBenefits
