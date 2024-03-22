import React from 'react'

export default function Box({className="", children}) {
  return (
    <div className={`${className} rounded-lg bg-zinc-800 flex-col gap-4 h-[80vh] relative overflow-y-scroll `}>
      
      {children}
      </div>
  )
}
