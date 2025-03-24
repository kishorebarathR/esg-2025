import React, { useState, useEffect } from "react"
import InputField from "./InputField"
import TextAreaField from "./TextAreaField"
import axios from "axios"
import { IoMdClose } from "react-icons/io"

export default function ContactForm({ fields, form, type, btn, bg }) {
  const [formData, setFormData] = useState(
    fields.reduce(
      (acc, field) => {
        acc[field.id] = ""
        return acc
      },
      { formType: type }
    )
  )

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showModal])

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/ // Adjust if you want to support +91 or other formats
    return re.test(String(phone))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`
      }
    })

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setSuccessMessage("")

    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key])
      })

      await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/11056/feedback",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      setSuccessMessage("Thank you for contacting us.")
      setShowModal(true)
      setFormData(
        fields.reduce(
          (acc, field) => {
            acc[field.id] = ""
            return acc
          },
          { formType: type }
        )
      )
      setErrors({})
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }
  return (
    <>
      <form
        className="w-full max-w-screen-lg mx-auto"
        onSubmit={handleFormSubmit}
      >
        <div className={`grid grid-cols-${form} gap-4`}>
          {fields.map((field) => {
            if (field.id === "spacer") {
              return <div key={field.id} className="h-4 w-full" />
            }

            return (
              <div
                key={field.id}
                className={`${
                  field.type === "textarea"
                    ? "col-span-2"
                    : "flex flex-col w-full"
                }`}
              >
                <label htmlFor={field.id} className="text-white mb-1 text-md">
                  {field.type !== "checkbox" && field.label}
                </label>

                {field.type === "textarea" ? (
                  <TextAreaField
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="text-black"
                  />
                ) : field.type === "checkbox" ? (
                  <label className="inline-flex items-center mt-2 text-white">
                    <input
                      type="checkbox"
                      id={field.id}
                      checked={formData[field.id]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.id]: e.target.checked,
                        }))
                      }
                      className="form-checkbox h-5 w-5 text-[#216559] mr-2"
                    />
                    {field.label}
                  </label>
                ) : (
                  <InputField
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                )}

                {errors[field.id] && (
                  <span className="text-red-500 text-sm">
                    {errors[field.id]}
                  </span>
                )}
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <button
            type="submit"
            className={`px-4 py-2 ${bg} rounded ${btn} text-lg sm:text-xl`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
            {/* X Close Button */}
            <button
              className="absolute top-3 right-3 text-black hover:text-gray-900 text-2xl"
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
