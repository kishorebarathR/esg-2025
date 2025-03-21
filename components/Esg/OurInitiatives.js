import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

const OurInitiatives = () => {
  const initiatives = [
    {
      name: "Shonya",
      description: "Net Zero solutions for brands and MSMEs",
      imgSrc: "/SHOONYA logo.svg",
      imgAlt: "Shonya Logo",
    },
    {
      name: "Swasti",
      description: "Ensuring everyday wellbeing for all",
      imgSrc: "/swasti.png",
      imgAlt: "Swasti Logo",
    },
    {
      name: "UPFRONT",
      description: "Making wellbeing a reality for the workforce",
      imgSrc: "/Upfront-log.png",
      imgAlt: "UPFRONT Logo",
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="container mx-auto px-4 mt-7">
      {/* Header Button */}
      <div className="flex justify-center mb-12">
        <h3 className="bg-mint-100 text-[#632E88] px-8 py-3 rounded-full text-2xl hover:bg-mint-200 transition-colors border bg-[#D0EAE2] font-semibold">
          Our Initiatives
        </h3>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row justify-between gap-4">
        {initiatives.map((initiative, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Logo Image with Border */}
            <div className="border-4 border-emerald-100 rounded-2xl p-4 flex justify-center w-full">
              <img
                src={initiative.imgSrc}
                alt={initiative.imgAlt}
                className="h-24 w-44 object-contain"
              />
            </div>

            {/* Description Outside of the Border - Adjusting for Two Lines */}
            <p className="text-gray-700 text-center mt-4 pb-2 text-lg max-w-[220px] leading-tight">
              {initiative.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {initiatives.map((initiative, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="border-4 border-emerald-100 rounded-2xl p-4 flex justify-center w-full">
                <img
                  src={initiative.imgSrc}
                  alt={initiative.imgAlt}
                  className="h-24 w-44 object-contain"
                />
              </div>
              <p className="text-gray-700 text-center mt-4 pb-2 text-lg">
                {initiative.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-8">
      <Link href="/solutions" className="bg-[#7F3F97] text-white px-8 py-2 rounded-md hover:bg-[#9254a9] transition-colors inline-block">
  Know More
</Link>

      </div>
    </div>
  )
}

export default OurInitiatives
