import React from "react"
import Assesment from "./Assesment"
import Environment from "./Environment"
import Image from "next/image"

const Accordion = () => {
  return (
    <>
      <div className="container mx-auto p-5" id="consulting">
        <div className="md:flex justify-center items-stretch text-center text-white text-3xl">
          {/* for desktop */}
          <div className="bg-[#239F79] p-10 md:w-1/2 md:rounded-ss-[50px] flex-grow hidden sm:block">
            <p>Consulting</p>
          </div>
          {/* for mobile */}
          <div className="bg-[#239F79] p-10 md:w-1/2 md:rounded-ss-[50px] flex-grow w-full relative lg:hidden sm:block">
            <p>Consulting</p>
            <div></div>

            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="flex items-center justify-center">
                <Image
                  src="/solutions/icon-mobile-1.svg"
                  alt="icon1"
                  width={90}
                  height={90}
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#7F3F97] p-10 md:w-1/2 md:rounded-se-[50px] hidden lg:block flex-grow">
            <p>Implementation</p>
          </div>
        </div>
        <div className="md:flex justify-center items-stretch gap-1">
          <div className="md:w-1/2 flex-grow">
            <Assesment />
          </div>
          <div className="md:w-1/2 flex-grow mt-16 md:mt-0">
            <div className="bg-[#7F3F97] p-10 md:w-1/2 md:rounded-ss-[50px] flex-grow w-full relative lg:hidden sm:block text-white text-center text-3xl">
              <p>Implementation</p>
              <div></div>

              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center">
                  <Image
                    src="/solutions/icon-mobile-2.svg"
                    width={90}
                    height={90}
                    className="w-20 h-20"
                    alt="icon2"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-y-auto">
              <Environment className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion
