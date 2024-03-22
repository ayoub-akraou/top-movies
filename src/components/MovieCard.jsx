import React from 'react'

export default function MovieCard() {
  return (
   <li className="px-6 py-4 flex gap-5 items-center border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer">
   <div className="w-10">
      <img
         src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
         alt=""
      />
   </div>
   <div className="box text-sm">
      <h3 className="title font-medium mb-1">Spider-Man</h3>
      <p className="release-date">🗓 2002</p>
   </div>
</li>
  )
}
