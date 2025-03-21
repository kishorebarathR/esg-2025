"use client"

import { useEffect, useState } from "react"

const Banner = ({
  bannerImageUrl,
  mobileBannerUrl,
  bannerTitle,
  bannerDesc,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(mobileBannerUrl)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setBackgroundImage(bannerImageUrl)
      } else {
        setBackgroundImage(mobileBannerUrl)
      }
    }

    // Set initial image based on the current window width
    handleResize()

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [bannerImageUrl, mobileBannerUrl])

  return (
    <div
      className="bg-cover bg-center h-[90vh] md:h-[450px] lg:h-[70vh] lg:grid grid-cols-3 sm:flex justify-center sm:justify-end items-start sm:items-center p-4 sm:p-8 md:p-12 lg:p-16 mt-16 sm:mt-12 md:mt-16 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="col-span-2"></div>
      <div className="flex flex-col gap-1 sm:gap-3 md:gap-4 lg:gap-5 w-full max-w-[400px] md:max-w-[516px] text-center sm:text-left pt-3 lg:-ms-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#239F79] font-semibold">
          {bannerTitle}
        </h1>
        <p className="text-base lg:text-lg text-[#5C5C5C]">{bannerDesc}</p>
      </div>
    </div>
  )
}

export default Banner
