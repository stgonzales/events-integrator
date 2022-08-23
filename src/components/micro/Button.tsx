import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function Button(props: ButtonProps) {
  const { children, type, form, onClick, disabled = false } = props

  return (
    <button
      type={type}
      form={form}
      disabled={disabled}
      className="mx-auto px-11 py-4 max-w-fit rounded-2xl bg-[#153D8A] font-sans font-bold text-2xl text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
