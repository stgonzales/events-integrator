import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string
}

function Input({ value, type, name, id, placeholder }: InputProps) {
  return (
    <input
      className="mx-auto w-[260px] sm:w-[350px] md:w-[450px] h-[70px] pl-4 bg-[#F2F2F2] border border-[#AEAEAE] text-[#3F3F3F] rounded-2xl shadow shadow-inner outline-none text-lg uppercase placeholder:text-[#AEAEAE]"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input
