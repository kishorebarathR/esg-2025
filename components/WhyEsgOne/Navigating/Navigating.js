import Image from "next/image"

const Navigating = () => {
  return (
    <>
      <div className=" flex flex-col items-center text-center px-4 w-full py-10">
        <h3 className="text-xl md:text-3xl text-[#632E88] font-semibold py-2">
          Why CG?
        </h3>
        <p className="text-sm md:text-lg text-[#171717] max-w-5xl">
          Catalyst Group (CG) leverages its extensive social sector expertise
          and commitment to sustainable development to tackle ESG challenges for
          MSMEs, corporations & not-for-profit organisations. By aligning with the United
          Nations Sustainable Development Goals (SDGs), CG supports businesses
          in mitigating impacts on vulnerable populations, advancing health, and
          fostering prosperity.
        </p>
      </div>
      <div className="relative flex flex-col items-center px-4 md:px-0 mb-6">
        {/* Background Image with Overlay */}
        <div className="lg:relative w-full flex justify-center">
          <Image
            src="/navigating/map.png"
            width={1240}
            height={1030}
            alt="India map"
            className="w-full max-w-3xl opacity-60"
          />
          {/* Overlay */}
          <div className="lg:absolute "></div>
        </div>

        {/* Title & Description */}

        <div className="absolute top-[10%] flex flex-col items-center text-center px-4 w-full">
          <h3 className="text-xl md:text-3xl text-[#239F79] font-semibold py-4">
            Navigating the ESG Landscape in India
          </h3>
          <p className="text-sm md:text-lg text-[#171717] max-w-3xl">
            The regulatory environment is evolving, with new sustainability
            regulations impacting the top 1000 (as on 2025 and set to increase over time as per SEBI's Glide Path)

companies by market capitalization
            in India and EU exporters. This shift places significant pressure on
            value chain players, particularly MSMEs, to align with these
            requirements. ESG equips your business to:
          </p>
        </div>

        {/* ESG Compliance & Global Requirements */}
        <div className="lg:absolute top-[36%] flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl px-6 mt-4 mb-4">
          {/* Left Card - Align with Global ESG */}
          <div className="border-8 border-[#D0EAE2] rounded-[36px] w-full md:w-1/2">
            <div className="bg-[#239F79] rounded-3xl m-3 py-6 px-5 text-white flex flex-col items-center text-center md:h-48">
              <h4 className="text-lg md:text-2xl font-semibold">
                Align with Global ESG Requirements
              </h4>
              <p className="text-sm md:text-lg mt-2">
                Ensure compliance with key regulations, including EU directives
                like CSRD, CBAM. Embrace transparency, ethical sourcing, and
                responsible practices to stay competitive in international
                markets.
              </p>
            </div>
          </div>

          {/* Right Card - Simplify ESG Compliance */}
          <div className="border-8 border-[#D0EAE2] rounded-[36px] w-full md:w-1/2">
            <div className="bg-[#239F79] rounded-3xl m-3 py-6 px-5 text-white flex flex-col items-center text-center md:h-48">
              <h4 className="text-lg md:text-2xl font-semibold">
                Simplify ESG Compliance for Growth
              </h4>
              <p className="text-sm md:text-lg mt-2 ">
                Leverage tools like SEBI’s BRSR Lite and BRSR Core  to reduce the complexity
                and cost of sustainability reporting while advancing
                environmental and social goals.
              </p>
            </div>
          </div>
        </div>

        {/* Extensive Experience Section */}
        <div className="lg:absolute lg:bottom-[12%] w-full flex justify-center px-4 pt-5">
          <div className="bg-[#DCD0E5] py-3 px-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 w-full md:w-1/2">
            <Image
              src="/whyEsgOne/icon01.svg"
              width={142}
              height={142}
              alt="Extensive Experience"
              className="h-28 w-28"
            />
            <div className="text-center md:text-left flex flex-col items-center md:items-start ">
              <h3 className="text-[#043929] text-xl md:text-2xl font-semibold">
                Extensive Experience
              </h3>
              <div className="border-b border-dashed border-gray-500 w-full my-2" />
              <p className="text-base md:text-lg text-[#171717]">
                Over 30 brands and 750+ factories across sectors such as
                Apparel, Agri-Commodity, and Manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigating
