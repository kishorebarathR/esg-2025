"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
  {
    image: "/reporting/icon1.svg",
    title: "30 Years of Experience",
    description: "Deep industry knowledge fostering robust ESG solutions",
  },
  {
    image: "/reporting/icon2.svg",
    title: (
      <>
        <span className="text-black text-lg font-medium">Supported Over</span>{" "}
        40,00,000 Factory Workers
      </>
    ),
    description:
      "Demonstrating our scale and impact in improving workplace sustainability",
  },
  {
    
    image: "/reporting/icon3.svg",
    title: (
      <>
        <span className="text-black text-lg font-medium">Partnered with</span>{" "}
        20,000 MSMEs
      </>
    ),
    description: "Enhancing their ESG performance and compliance",
  },
]

export default function ESGCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="py-14 flex justify-center lg:-mt-36 -mt-28 container mx-auto">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3  md:gap-3 lg:gap-11 gap-20 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative p-5 bg-white shadow-lg rounded-xl border border-gray-200
                   before:absolute before:-top-0.5 before:-right-0.5 before:h-[22%] before:w-[22%] before:border-t-[7px] before:border-r-[7px] before:border-cms-primary before:rounded-tr-xl
                   after:absolute after:bottom-0 after:left-0 after:h-[22%] after:w-[22%] after:border-b-[7px] after:border-l-[7px] after:border-cms-primary after:rounded-bl-xl"
          >
            <div className="  rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg bg-[#763A88] p-2"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#763A88]">
                {item.title}
              </h3>
              <p className="text-lg mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full  px-6 py-5">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <div
                className="relative p-6 bg-white shadow-lg rounded-xl border border-gray-200 h-72 flex flex-col justify-center
                   before:absolute before:-top-0.5 before:-right-0.5 before:h-[22%] before:w-[22%] before:border-t-[7px] before:border-r-[7px] before:border-cms-primary before:rounded-tr-xl
                   after:absolute after:bottom-0 after:left-0 after:h-[22%] after:w-[22%] after:border-b-[7px] after:border-l-[7px] after:border-cms-primary after:rounded-bl-xl"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg bg-[#763A88] p-2"
                  />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-[#763A88]">
                    {item.title}
                  </h3>
                  <p className="text-base mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
