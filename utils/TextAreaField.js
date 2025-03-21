import React from "react"

const TextAreaField = ({ id, value, onChange }) => {
  return (
    <textarea
      id={id}
      cols="30"
      rows="2"
      className="border-0 py-2 px-3 rounded text-ce-black shadow focus:outline-none focus:ring-0 w-full"
      value={value}
      onChange={onChange}
    ></textarea>
  )
}

export default TextAreaField
