import React from "react"
import ContactForm from "@/utils/ContactForm"

const Contact = React.forwardRef((props, ref) => {
  const formData = {
    formid: 2,
    formType: "esgFrom",
    formBtn: "text-[#05AC8D]",
    formBtnBg: "bg-white",
    fields: [
      { id: "firstname", label: "First Name", type: "text" },
      { id: "lastname", label: "Last Name", type: "text" },
      { id: "email", label: "Email ID", type: "email" },
      { id: "phone", label: "Phone Number", type: "text" },
      { id: "organisationName", label: "Organisation", type: "text" },

      // Empty transparent field
      { id: "spacer", label: "", type: "text", isSpacer: true },

      // Checkbox with "Demo" in bold
      {
        id: "subscribe",
        label: (
          <>
            I would like to get a <strong className="px-1">Demo</strong> and a{" "}
            <strong className="px-1"> Sample Report</strong>
          </>
        ),
        type: "checkbox",
      },

      { id: "messageBox", label: "Message", type: "textarea" },
    ],
  }

  return (
    <section id="contact" ref={ref} className="bg-[#05AC8D] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-white text-3xl font-semibold mb-2">Contact Us</h3>
          <h4 className="text-white text-lg font-light px-6 lg:px-0">
            Enquire to Discover How You Can Benefit from ESG
          </h4>
        </div>

        <div className="w-full lg:w-8/12">
          <ContactForm
            fields={formData.fields}
            form={formData.formid}
            type={formData.formType}
            btn={formData.formBtn}
            bg={formData.formBtnBg}
          />
        </div>
      </div>
    </section>
  )
})

export default Contact
