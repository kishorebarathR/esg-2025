"use client"
import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"
import { sectors } from "../../utils/data"

function DifferentSectors() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  }

  return (
    <>
      <div className="text-center lg:w-[70%] mx-auto">
        <h2 className="text-[#7F3F97] font-semibold lg:text-3xl lg:py-10 text-xl px-4">
          We help different sectors achieve their ESG requirements.
        </h2>
      </div>

      <div className="w-[90%] mx-auto p-5 container">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={false}
          arrows={false}
          className="lg:mt-4 mx-auto"
          containerClass="pb-8 px-2"
        >
          {sectors.map((item, index) => (
            <div
              className="shadow-lg rounded-lg bg-white overflow-hidden flex flex-col lg:flex-row items-center lg:items-start p-4 mx-2 lg:h-[320px]"
              key={index}
            >
              {/* Image on the Left */}
              <div className="w-full lg:w-72 lg:h-[285px]">
                <img
                  src={item.imgUrl}
                  className="w-full h-full object-cover rounded-lg"
                  alt={item.title}
                  width={1000}
                  height={500}
                />
              </div>

              {/* Text on the Right */}
              <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between h-[300px] ">
                <div>
                  <h2 className="text-[#7F3F97] text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-[13px] mt-2">{item.description}</p>
                </div>

                {/* "Know More" Button Positioned at Bottom */}
                {item.link && (
                  <div>
                    <Link href={item.link}>
                      <button className="bg-[#7F3F97] text-white px-4 py-2 rounded-md">
                        Know More
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default DifferentSectors
