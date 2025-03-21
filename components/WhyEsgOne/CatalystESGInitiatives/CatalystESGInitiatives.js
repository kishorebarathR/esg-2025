import React, { useState, useEffect } from "react"
import Image from "next/image"

const CatalystESGInitiatives = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    if (window.innerWidth < 1024) {
      setIsModalOpen(true)
      document.body.classList.add("overflow-hidden") // Prevent background scrolling
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove("overflow-hidden") // Allow background scrolling
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden") // Cleanup on unmount
    }
  }, [])

  return (
    <>
    <div>
    <h3 className="text-xl md:text-3xl text-[#239F79] font-semibold py-4 text-center">Catalyst ESG Initiatives</h3>
    </div>
    <div
      className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 relative"
     
    >
      <div className="relative w-full h-full">
        {/* Image */}
        <Image
          src="/whyEsgOne/Infographic-img-002.jpg"
          alt="Outcome Desktop"
          width={1400}
          height={950}
          className="w-full h-full p-3"
        />

        {/* Centered Glass Effect */}
        <div
          onClick={handleImageClick}
          className="absolute inset-0 flex md:hidden justify-center items-center text-lg bg-black/15 border border-white/100 rounded-lg shadow-lg m-3"
        >
          <button className="inline-flex items-center justify-center px-4 py-2 text-black bg-white rounded-lg shadow-md border border-white/5 transition duration-300 hover:bg-white/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/10">
            View Image
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 lg:hidden bg-black bg-opacity-50"
          onClick={closeModal} // Close when clicking on the background
        >
          <div
            className="bg-white p-5 rounded-lg relative w-96 h-[60vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 text-xl z-50"
            >
              ✕
            </button>

            {/* Horizontal Scrollable Image */}
            <div className="w-full h-full overflow-x-auto justify-center items-center">
              <Image
                src="/whyEsgOne/Infographic-img-002.jpg"
                alt="Modal Image"
                width={1400}
                height={950}
                className="w-auto h-full max-w-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default CatalystESGInitiatives
