import React from "react";
import { WatchedMovieCard } from "./";

export default function MoviesYouWatched({ watched, setWatched }) {
	const imdbAverageRating = average("imdbRating")
	const userAverageRating = average("userRating")
	const averageDuration = average("duration")
	
	function average(property) {
		return watched.length ? (watched?.map(movie => movie[property])?.reduce((acc, curr) => acc + +curr, 0) / watched.length).toFixed(2) : "0.00"
	}
	
	return (
		<><div className="px-6 py-5 bg-white/5 rounded-xl">
		<h2 className="uppercase font-medium mb-2">movies you watched</h2>
		<div className="box text-sm flex gap-2">
			<span className="movies-number">#️⃣ {watched.length} movies</span>
			<span className="">⭐️ {imdbAverageRating}</span>
			<span className="">🌟 {userAverageRating}</span>
			<span className="average-duration">⏳ {averageDuration} min</span>
		</div></div>
		<div className="wrapper">
			{watched.map((movie) => (
				<WatchedMovieCard key={movie.id} movie={movie} setWatched={setWatched}/>
			))}
		</div></>
		
	);
}
