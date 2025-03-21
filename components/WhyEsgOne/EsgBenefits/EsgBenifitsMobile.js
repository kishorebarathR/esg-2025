import Image from "next/image"
import Link from "next/link"

const EsgBenifitsMobile = () => {
  // Define your sections array
  const sections = [
    {
      content: (
        <>
          <div className="pl-8">
            <Image src="/solutions/icon-01.svg" width={70} height={70} alt="icon-01" />
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              Increased access to markets and customers
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              Will enable MSMEs to become preferred suppliers to the increasing
              number of customers who expect responsible behaviour from their
              value chains
            </p>
          </div>

          <div className="pl-8 pt-10">
            <Image src="/solutions/icon-02.svg" width={70} height={70} alt="icon-02" />
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              Better preparedness for compliance
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              There are already multiple buyer codes and standards that MSMEs
              are expected to align themselves with and these will only
              increase. Adopting ESG disclosures will enable MSMEs to be better
              prepared for the future
            </p>
          </div>

          <div className="pl-8 pt-10">
            <Image src="/solutions/icon-03.svg" width={70} height={70} alt="icon-03" />
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              De-risking operations
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              Will enable MSMEs to reduce the risk of their operations being
              affected due to noncompliance with either regulations or customer
              expectations
            </p>
          </div>

          <div className="pl-8 pt-10">
            <Image src="/solutions/icon-04.svg" width={70} height={70} alt="icon-04" />
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              Cost savings and increase in productivity
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              There’s growing evidence, even among MSMEs, that investing in
              processes to reduce environmental impact, waste, and improve
              employee well-being yields quick and substantial returns on
              investment
            </p>
          </div>

          <div className="pl-8 pt-10">
            <Image src="/solutions/icon-05.svg" width={70} height={70} alt="icon-05" />
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              Access to Funds
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              Financial Institutions are looking at businesses that do not
              conform to responsible business practices as risky and either fund
              them at a premium or do not fund them at all
            </p>
            <p className="pt-5">
              <Link
                href="https://www.iba.org.in/reports/national-voluntary-guidelines-for-responsible-financing_290.html"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#7F3F97] rounded"
              >
                See: National Voluntary Guidelines for Responsible Finance by
                The Indian Banks Association
              </Link>
            </p>
          </div>

          <div className="pl-8 pt-10">
            <Image src="/solutions/icon-06.svg" width={70} height={70} alt="icon-06"/>
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97] text-2xl">
              Stakeholder Engagement
            </p>
          </div>

          <div className="ml-8 text-lg">
            <p>
              By engaging with stakeholders such as customers, suppliers,
              employees, and local communities through sustainability reporting,
              MSMEs can build trust and strengthen relationships
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="max-w-7xl mx-auto bg-[#F8F2FC] relative md:mt-10 mt-4 z-0">
        <div className="absolute z-50 hidden sm:block right-0">
          <Image
            src="/solutions/icon-002.svg"
            className=""
            width={100}
            height={100}
            alt="icon-07"
          />
        </div>

        {sections.map((section) => (
          <div key={section.key} className="my-1 bg-[#F8F2FC]">
            <div className="p-4 pl-8 space-y-3 text-gray-700 relative">
              {/* Vertical Dotted Line */}
              <div className="absolute left-[27px] top-0 h-full w-[2px] border-l-2 border-dashed border-[#4f4e4e]"></div>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EsgBenifitsMobile
