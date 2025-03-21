import { frameworksData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import EsgBenifitsMobile from "./EsgBenifitsMobile"

const EsgBenefits = () => {
  return (
    <div className="bg-[#F8F2FC] flex flex-col items-center w-full py-10 lg:px-6">
      <h2 className="text-3xl text-[#622F88] font-semibold mb-4">
        ESG Value for Value Chains
      </h2>
      <div className="flex justify-center w-full relative">
        {/* Desktop Image */}

        <div className="lg:grid grid-cols-3 gap-4 w-full relative mt-10 md:block hidden">
          <div className="flex flex-col justify-between">
            <div className="absolute w-[32%] pl-10">
              <div className="text-end">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  Increased access to markets and customers
                </h3>
                <p className="mt-3">
                  Enabling MSMEs to become preferred suppliers to the increasing
                  number of customers who expect responsible behaviour from
                  their value chains
                </p>
              </div>
            </div>
            <div className="text-end">
              <div className="absolute w-[32%] pl-10 top-[39%]">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  Better preparedness for compliance
                </h3>
                <p className="mt-3">
                  There are already multiple buyer codes and standards that
                  MSMEs are expected to align themselves with and these will
                  only increase. Adopting ESG disclosures will enable MSMEs to
                  be better prepared for the future
                </p>
              </div>
            </div>
            <div className="text-end mt-20">
              <div className="absolute w-[32%] pl-10 top-[86%]">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  De-risking operations
                </h3>
                <p className="mt-3">
                  Will enable MSMEs to reduce the risk of their operations being
                  affected due to noncompliance with either regulations or
                  customer expectations
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/solutions/esg-value-benefits.svg"
              width={100}
              height={600}
              alt="ESG Benefits"
              className="w-full h-[90%]"
            />
          </div>

          <div>
            <div className="absolute w-[29%] pr-10">
              <div className="">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  Cost savings and increase in productivity
                </h3>
                <p className="mt-3">
                  There’s growing evidence, even among MSMEs, that investing in
                  processes to reduce environmental impact, waste, and improve
                  employee wellbeing yields quick and substantial returns on
                  investment
                </p>
              </div>
            </div>
            <div className="">
              <div className="absolute w-[32%] pr-10 top-[39%]">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  Access to Funds
                </h3>
                <p className="mt-3 mb-4">
                  Financial Institutions are looking at businesses that do not
                  conform to responsible business practices as risky and either
                  fund them at a premium or do not fund them at all
                </p>
                <Link
                  href="https://www.iba.org.in/reports/national-voluntary-guidelines-for-responsible-financing_290.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-[#7F3F97]  rounded"
                >
                  See: National Voluntary Guidelines for Responsible<br></br>{" "}
                  Finance by The Indian Banks Association
                </Link>
              </div>
            </div>
            <div className=" mt-20">
              <div className="absolute w-[32%] pr-10 top-[86%]">
                <h3 className="text-[#7F3F97] text-2xl font-semibold">
                  Stakeholder Engagement
                </h3>
                <p className="mt-3">
                  By engaging with stakeholders such as customers, suppliers,
                  employees, and local communities through sustainability
                  reporting, MSMEs can build trust and strengthen relationships
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="relative w-full md:w-10/12 block md:hidden">
          <EsgBenifitsMobile />
        </div>
      </div>

      <div className="space-y-4 md:space-y-5 text-center mt-16">
        <h3 className="text-[#622F88] text-2xl md:text-3xl font-semibold">
          Frameworks We Align With
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
          {frameworksData.map((item) => {
            return (
              <li key={item.id} className="flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  height={77}
                  width={165}
                  className="h-auto w-auto"
                  alt={item.name}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default EsgBenefits
