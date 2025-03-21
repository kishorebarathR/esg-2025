"use client"

import React, { useRef, useEffect } from "react"
import GlobalImpact from "@/components/Esg/GlobalImpact"
import OurComprehensive from "@/components/Esg/OurComprehensive"
import DifferentSectors from "@/components/Esg/DifferentSectors"
import OurInitiatives from "@/components/Esg/OurInitiatives"
import Vision from "@/components/Esg/Vision"
import Footer from "@/components/Esg/Footer"
import Contact from "@/components/Esg/Contact"
import Banner from "@/components/Esg/Banner"
import Heading from "@/components/Heading/Heading"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"



export default function Home() {
  const contactRef = useRef(null)

  const bannerImageUrl = "/banner/banner01.png"
  const mobileBannerUrl = "/banner/mobileBanner01.jpg"
  const bannerTitle = "Sustainable Tomorrow"
  const bannerDesc = "Catalysing Net-Positive Value Chains for a"

  const pathname = usePathname()
  const title = "Sustainability and ESG Consulting Services"
  const description =
    "Discover top-tier Sustainability and ESG Consulting Services tailored to enhance your business's environmental and social governance strategies. "
  const path = `${pathname}`
  const metaImage = ""

  const desc = (
    <>
    
    </>
  )

  useEffect(() => {
    if (window.location.hash === "#contact") {
      contactRef.current?.scrollIntoView({})
    }
  }, [])

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Heading desc={desc} />
      <OurComprehensive />
      <GlobalImpact />
      <DifferentSectors />
      <OurInitiatives />
      <Vision />
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}
