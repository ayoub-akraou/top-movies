import React from 'react'

export default function MovieCard({movie, setSelectedMovieId}) {
   const {Poster: poster, Title: title, Year: year, imdbID: id} = movie;
   
  return (
   <li onClick={() => setSelectedMovieId(id)} className="px-6 py-4 flex gap-5 items-center border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer">
   <div className="w-10">
      <img
         src={poster}
         alt=""
      />
   </div>
   <div className="box text-sm">
      <h3 className="title font-medium mb-1">{title}</h3>
      <p className="release-date">🗓 {year}</p>
   </div>
</li>
  )
}
