"use client"
"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { IoMdClose } from "react-icons/io"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    organisation: "",
    message: "",
    updates: false, 
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto"
  }, [showModal])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate empty fields
    Object.keys(formData).forEach((key) => {
      if (
        key !== "updates" && // optional checkbox
        !formData[key]
      ) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`
      }
    })

    const phoneNumberRegex = /^[0-9]+$/
    if (formData.phoneNumber && !phoneNumberRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must only contain numbers."
    } else if (formData.phoneNumber.length > 13) {
      newErrors.phoneNumber = "Phone number cannot be longer than 13 digits."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/11057/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (response.data.status === "mail_sent") {
        setIsSubmitted(true)
        setShowModal(true)
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          organisation: "",
          message: "",
          updates: false,
        })
        setErrors({})
      } else {
        setErrors({ form: "Submission failed. Please try again." })
      }
    } catch (err) {
      setErrors({
        form: "An error occurred. Please check your details and try again.",
      })
      console.error("Form submission error:", err)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[950px] mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-5">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-5">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-5">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-5">Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-5">Organisation</label>
          <input
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.organisation && (
            <p className="text-red-500 text-sm">{errors.organisation}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="updates"
              checked={formData.updates}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-cms-primary"
            />
            <span className="ml-2 text-gray-700">
              I would like to get a <span className="font-semibold">Demo</span>{" "}
              and a <span className="font-semibold">Sample Report</span>
            </span>
          </label>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-5">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-100 shadow-md rounded-sm"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-cms-primary text-white px-4 py-2 rounded-md hover:bg-[#a04ac3]"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
            {/* X Close Button */}
            <button
              className="absolute top-3 right-3  text-black hover:text-gray-900 text-2xl "
              onClick={() => setShowModal(false)}
            >
              <IoMdClose />
            </button>

            <p className="text-green-500 text-2xl">
              Thank you for submitting the form. We will contact you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-7 bg-[#7F3F98] text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactForm
