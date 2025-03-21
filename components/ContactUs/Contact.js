import ContactForm from "@/utils/ContactForm"
import React from "react"

const Contact = React.forwardRef((props, ref) => {
  const fields = {
    formid: 1,
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
    <div className="p-8" ref={ref}>
      <div className="flex flex-col mx-auto">
        {/* <div className="text-center mx-auto">
          <h3 className="text-white text-2xl mb-4">Contact Us</h3>
          <h4 className="text-white mb-2 p-6 lg:p-0">
            Reach out to us to discover how you can implement ESG solutions
          </h4>
        </div> */}
        <div className="">
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
