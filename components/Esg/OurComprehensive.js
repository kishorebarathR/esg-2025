import Image from "next/image"
import React from "react"

const OurComprehensive = () => {
  return (
     <div
         className="flex flex-col items-center gap-3 md:gap-5 px-4 md:px-8 pb-10 container mx-auto "
        
       >
         <h1 className="text-2xl md:text-5xl text-center py-2">
         Our Comprehensive 
           <span className="text-cms-primary-green font-semibold px-1">Expertise?</span>
         </h1>
       
         <p className="text-lg text-center lg:px-44 px-3 pb-4">
         Catalyst Group is dedicated to creating solutions for enhancing business practices for the benefit of all stakeholders. This involves promoting equitable and advantageous social practices, and upholding robust, ethical governance standards.
         </p>
         <Image
           src="/whyEsgOne/image01.png"
           width={1000}
           height={500}
           alt=""
           className="w-full mt-4 md:mt-5 hidden md:block "
         />
         <Image
           src="/whyEsgOne/mImage01.png"
           width={500}
           height={1000}
           alt=""
           className="w-full md:w-3/4 mt-4 md:mt-5 block md:hidden"
         />
       </div>
  )
}

export default OurComprehensive
