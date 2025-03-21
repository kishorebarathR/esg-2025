"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"
import Outcome from "@/components/Esg/Outcome"
import Navigating from "@/components/WhyEsgOne/Navigating/Navigating"
import CatalystESGInitiatives from "@/components/WhyEsgOne/CatalystESGInitiatives/CatalystESGInitiatives"
import MeetOurTeam from "@/components/WhyEsgOne/MeetOurTeam/MeetOurTeam"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {
  const bannerImageUrl = "/banner/WHY-ESG-Banner-02.png"
  const mobileBannerUrl = "/banner/mobileBanner02.jpg"
  const bannerTitle = "Why ESG"
  const bannerDesc =
    " ESG (Environmental, Social, and Governance) has become crucial in today's world as businesses are increasingly evaluated on non-financial metrics alongside financial performance. Strong ESG performance enhances resilience, mitigates risks, and drives long-term value creation in a rapidly evolving global landscape."
  const titles = "A Legacy of Excellence with The Catalyst Group"
  const desc =
    "Powered by The Catalyst Group, we bring over 30 years of expertise in social development. Headquartered in Bangalore, India, our experience spans Monitoring, Evaluation, Health, Livelihoods, and ESG solutions, addressing challenges like climate change, social inequality, and economic development."

const pathname = usePathname()
  const title = "Capacity Building Initiatives for SDGs & ESG Compliance"
  const description =
    "Explore our focused approach on capacity building initiatives for SDGs and staying ahead with ESG compliance and regulations.  "
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
      {/* <Header /> */}
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Navigating />
      <Outcome />
      <CatalystESGInitiatives />
      <MeetOurTeam />
      <Footer />
    </>
  )
}

export default page
