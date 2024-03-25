import React from 'react'

export default function ShowHideButton({className="", children, onClick}) {
  return (
    <button onClick={onClick}className={`${className} text-xl bg-gray-900 w-6 h-6 rounded-full flex justify-center items-center text-white absolute top-1 right-1 active:scale-95 shadow-md shadow-white/10`}>{children}</button>
  )
}
