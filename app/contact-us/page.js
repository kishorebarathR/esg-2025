'use client'
import Banner from "@/components/Banner/Banner"
import ContactForm from "@/components/ContactUs/ContactForm copy"
import Footer from "@/components/Esg/Footer"
import React from "react"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const page = () => {
  const bannerImageUrl = "/contact-Desktop-Banner-05.png"
  const mobileBannerUrl = "/banner/mobileBanner05.jpg"
  const bannerTitle = "Contact Us"
  const bannerDesc = ""
  const title = "Let’s Start a Conversation"
  const pathname = usePathname()
  const path = `${pathname}`
  const metaImage = ""
  return (
    <>
    <Seo
        // title={title}
        // description={description}
        path={path}
        metaImage={metaImage}
      />
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <div className="p-5 md:p-10 lg:flex flex-row md:flex-col justify-center items-center  md:text-left">
        {/* Text Section */}

        <div>
          <h2 className="text-xl md:text-2xl text-[#632E88] font-semibold mt-3 text-center pb-5">
            Let’s Start a Conversation
          </h2>
          <p className="text-sm md:text-base text-[#1C1C1C] pb-5">
            We value your feedback and questions. Contact us with any questions
            or comments, and we will ensure a prompt and helpful response.
          </p>
        </div>
        {/* Contact Form Section */}
        <div className="w-full md:w-auto flex justify-center">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
