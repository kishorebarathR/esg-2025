import React from "react"
import Image from "next/image"
import Link from "next/link"
const ESGReporting = () => {
  return (
    <>
      <div className="px-6 py-2">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Simplify Your ESG Reporting with
            <span className="text-green-600"> Our Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 container mx-auto">
          {[
            {
              title: "Accurate Validation",
              description:
                "Our rigorous data validation process ensures that your reports are reliable and compliant with all standards - BRSR, GRI, SASB & TCFD",
            },
            {
              title: "Auto-Sum Calculations",
              description:
                "Increase your operational efficiency with our automated calculation features",
            },
            {
              title: "Multiple Formats",
              description:
                "Our tools support outputs in both PDF and XBRL formats, ready for any regulatory or stakeholder review",
            },
            {
              title: "Concise Data Presentation",
              description:
                "We transform complex ESG data into clear, actionable insights, streamlining your internal and external communication",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-[#F8F2FC] p-4 h-44 lg:h-28">
              <h3 className=" text-[#763A88] text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto pt-10">
          <p className="text-[18px] text-center">
            Leveraging our three decades of expertise in the social domain, we
            have developed the Sustainability Reporting Tool to provide
            corporates and MSMEs with guidance and to ensure that you have a
            <span className="text-[#763A88] font-semibold">
              {" "}
              &nbsp; simplified, user-friendly experience
            </span>{" "}
            for completing the challenging task of sustainability reporting.
          </p>
          <p className="text-[#763A88] text-[24px] text-center pt-5 ">
            With this tool we aim to make sustainability reporting{" "}
            <span className="text-[#763A88] font-semibold">
              &nbsp;easy, comprehensive, time-saving and convenient.
            </span>
          </p>
        </div>

        <div className="mt-12 text-center ">
          <h3 className="text-3xl font-bold text-gray-900 py-3">
            Streamline Your
            <span className="text-green-600"> Sustainability Journey</span>
          </h3>
          <p className="text-lg container mx-auto mt-2 text-left">
            Harness three decades of our expertise with the Sustainability
            Reporting Tool. Designed for corporates and MSMEs, this tool
            simplifies your sustainability reporting process, making it
            user-friendly, comprehensive, and time-efficient. We will also help
            you derive value out of the collected data through our <b> <Link
            href="/solutions"
            className="text-[#7F3F98]"
          >
            ESG solutions
          </Link></b>.
          </p>
        </div>

        <div className="flex justify-center items-center bg-white mt-10">
          {/* Image visible only on desktop */}
          <Image
            src="/reporting/Streamline.jpg"
            width={1080}
            height={1080}
            alt="ESG Reporting Icon"
            className="hidden lg:block w-[110vh] h-full"
          />
        </div>

        <div className="flex justify-center items-center bg-white mt-10">
          {/* Image visible only on mobile */}
          <Image
            src="/reporting/Streamline-img-mobile.png"
            width={1080}
            height={1080}
            alt="ESG Reporting Icon"
            className="block lg:hidden w-full h-full"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact-us"
            className="bg-[#033929] text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Submit your report before the deadline
          </Link>
        </div>
      </div>
      <div className="-mb-2 w-full h-full ">
        <Image
          src="/reporting/repoting-img-footer.jpg"
          width={1000}
          height={500}
          alt="footer-img"
          className="lg:w-full lg:h-full w-[100vh]  h-[22vh]"
        />
      </div>
    </>
  )
}

export default ESGReporting
