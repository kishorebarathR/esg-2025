import ContactForm from "@/utils/ContactForm"
import React from "react"

const Contact = React.forwardRef((props, ref) => {
  const fields = {
    formid: 2,
    formType: "esgFrom",
    formBtn: "text-[#05AC8D]",
    formBtnBg: "bg-white",
    fields: [
      { id: "firstname", label: "First Name", type: "text" },
      { id: "lastname", label: "Last Name", type: "text" },
      { id: "email", label: "Email ID", type: "email" },
      { id: "organisationName", label: "Organisation", type: "text" },
      { id: "messageBox", label: "Message", type: "textarea" },
    ],
  }

  return (
    <div id="contact" className=" bg-[#05AC8D] py-8 " ref={ref}>
      <div className="flex flex-col mx-auto">
        <div className="text-center mx-auto">
          <h3 className="text-white text-2xl mb-4">Contact Us</h3>
          <h4 className="text-white mb-2 p-6 lg:p-0">
          Enquire to Discover How You Can Benefit from ESG
          </h4>
        </div>
        <div className="mx-auto p-4 lg:w-8/12">
          <ContactForm
            fields={fields.fields}
            form={fields.formid}
            type={fields.formType}
            btn={fields.formBtn}
            bg={fields.formBtnBg}
          />
        </div>
      </div>
    </div>
  )
})

export default Contact
