"use client"

import Image from "next/image"
import Contact from "@/components/Esg/Contact"
import Footer from "@/components/Esg/Footer"
import OurExpertise from "@/components/Reporting/OurExpertise"
import ESGReporting from "@/components/Reporting/ESGReporting"
import { useEffect } from "react"
import AOS from "aos"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    })
  }, [])

  const pathname = usePathname()
  const title = "ESG Consulting and Reporting"
  const description =
    "Our dedicated team provides comprehensive sustainability and ESG consulting to help your business achieve its environmental, social, and governance objectives efficiently."
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

      {/* Desktop Image */}
      <div className="hidden sm:block mt-16">
        <Image
          src="/reporting/reporting-desktop-bg-img.png"
          alt="ESG Reporting Desktop"
          className="w-full h-auto"
          width={1400}
          height={900}
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden   mt-16">
        <Image
          src="/reporting/reporting-mobile-bg-img.png"
          alt="ESG Reporting Mobile"
          className="w-full h-auto"
          width={1400}
          height={900}
        />
      </div>

      <OurExpertise />
      <ESGReporting />
      <Contact />
      <Footer />
    </>
  )
}

export default Page
