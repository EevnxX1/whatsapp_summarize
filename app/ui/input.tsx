import React, { useId } from "react"
import clsx from "clsx"

interface labelInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;

}

export default function Input({children, type, name, placeholder, className}:labelInput) {
  const id = useId()
  return (
    <>
      <div className={clsx("flex flex-col", className)}>
        <label className="text-black ml-[2px]">{children}</label>
        <input className="text-black py-1 px-2 outline-1 outline-gray-600 rounded-lg" type={type} name={name} placeholder={placeholder} required/>
      </div>
    </>
  )
}
