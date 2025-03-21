import React from "react"
import Link from "next/link"

const Heading = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center my-12 md:my-16 px-4 md:px-0">
        <div className="w-full md:w-3/4 space-y-2 md:space-y-3">
          <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#249F7A] font-semibold text-center">
            In today’s interconnected world, the ripple effects of our actions
            demand a collaborative approach to sustainability.
          </h2>
          <p className="text-base md:text-lg lg:text-lg text-[#171717] text-center">
            It’s essential for organisations to expand their focus beyond direct
            operations and embrace responsible practices across the entire value
            chain. By prioritising policies and practices that benefit people,
            the planet, and long-term sustainability, we can foster meaningful
            change.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/solutions"
              className="bg-[#7E3F98] text-white px-6 py-2 mt-5 rounded-lg shadow-lg hover:bg-[#582f6a] hover:shadow-xl transition duration-300 inline-block"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading
