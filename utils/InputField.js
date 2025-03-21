import React from "react"

const InputField = ({ type, id, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      className="border-0 py-2 px-3 rounded text-black shadow focus:outline-none focus:ring-0"
      value={value}
      onChange={onChange}
    />
  )
}

export default InputField
