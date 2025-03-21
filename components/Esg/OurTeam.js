import { esgTeam } from "@/utils/data"
import React from "react"

export default function OurTeam() {
  return (
    <div className="flex lg:flex-row flex-col lg:w-10/12 lg:py-12 mx-auto p-4 lg:p-0">
      <div className="flex flex-col justify-start items-center lg:w-[40%] w-full">
        <h2 className="text-[#622F88] lg:text-6xl sticky top-16 text-xl py-8 lg:py-0">
          Meet our
          <br className="hidden lg:block" /> Team
        </h2>
      </div>
      <div className="lg:w-[60%] w-full">
        <div className="grid grid-cols-2 gap-4">
          {esgTeam.map((items, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
            <img
                src={items.profile}
                className="w-[250px] pb-4"
                alt={items.name}
              />
              <p className="text-[#7F3F97] lg:text-xl text-[15px]">
                {items.name}
              </p>
              <p className="lg:text-lg text-center h-[90px] text-[15px]">
                {items.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
