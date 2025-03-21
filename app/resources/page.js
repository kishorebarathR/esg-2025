"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Page = () => {
  const bannerImageUrl = "/banner/Resources-banner-07.png"
  const mobileBannerUrl = "/banner/Resources-banner-07.png"
  const bannerTitle = "Resources"

  const bannerDesc =
    "Explore our extensive library of resources to support your journey. From insightful articles to detailed guides and useful case studies, find the information you need to stay informed and empowered. Browse our categories for the latest trends and insights."

  const pathname = usePathname()
  const title = "ESG Resources | Reports, Case Studies & Insights"
  const description =
    "Explore our comprehensive ESG resources to gain insights into sustainable practices."
  const path = `${pathname}`
  const metaImage = ""

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      {/* Banner Section with Buttons Positioned in the Middle */}
      <div className="relative">
        <Banner
          bannerImageUrl={bannerImageUrl}
          bannerTitle={bannerTitle}
          bannerDesc={bannerDesc}
          mobileBannerUrl={mobileBannerUrl}
        />

        {/* Buttons Positioned 70% from the Left */}
        <div className="absolute  left-[30.5%] sm:left-[66%] bottom-10 flex flex-col items-start space-y-4 text-3xl text-[#239F78]">
          <h3 className="  rounded-md text-3xl font-semibold ">
            Coming Soon
          </h3>
          <Link
            href="/"
            className="bg-[#7F3E96] hover:bg-[#a24ac2] text-white lg:px-6 px-3 py-2 rounded-md text-lg inline-block text-center"
          >
            Back To Home
          </Link>
        </div>
        
      </div>

      <Footer />
    </>
  )
}

export default Page
