import Image from "next/image"
import Link from "next/link"
import React from "react"

const QualitySpeedTrust = () => {
  return (
    <div
      className="flex flex-col lg:flex-row gap-5 items-center my-16"
      data-aos="fade-up"
    >
      <div className="w-full lg:w-1/2">
        <Image
          src="/whyEsgOne/image03.png"
          width={683}
          height={481}
          alt="esg"
          className="w-full h-auto"
        />
      </div>

      <div className="px-5 lg:px-10 w-full lg:w-1/2 flex flex-col gap-4">
        <h3 className="text-[#622F88] text-2xl lg:text-3xl font-semibold">
          Quality, Speed, and Trust
        </h3>
        <p>
          We offers a unique blend of quality, speed, and trust, making us your
          ideal ESG partner. Our expertise, innovative approaches, and
          commitment to excellence ensure your business not only meets but
          exceeds expectations. Partner with us to drive inclusive and equitable
          growth, avoid social disharmony, and mitigate environmental risks.
          Together, we can build a sustainable future where businesses thrive
          and communities flourish.
        </p>
        <Link href="/#contact">
          <button className="px-4 py-2 bg-cms-primary text-white rounded hover:focus:ring-4 focus:ring-cms-secondary">
            Start Your ESG Journey
          </button>
        </Link>
      </div>
    </div>
  )
}

export default QualitySpeedTrust
