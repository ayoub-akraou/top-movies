import React, { useEffect, useState } from "react";

export default function MovieRatingWidget({
	className = "",
	userRating,
	setUserRating,
	watched,
	setWatched,
	movie,
	setSelectedMovieId,
}) {
	const [tempRating, setTempRating] = useState(0);
	const {
		Poster: poster,
		Title: title,
		imdbRating,
		Runtime: duration,
		imdbID: id,
	} = movie;
	const watchedMovie = {
		poster,
		title,
		imdbRating,
		userRating,
		duration: duration?.split(" ")[0],
		id,
	}
	function handleClick() {
		if (watched.some((movie) => {
			console.log(movie.id);
			console.log("setSelectedMovieId", id);
			return movie.id === id})) return;
		setWatched((watched) => [
			...watched,
			watchedMovie,
		]);
		setSelectedMovieId(null);
	}
	
	return (
		<div className={`${className} rounded-lg mx-auto bg-white/5 px-6 py-4`}>
			<div className="flex">
				{Array.from({ length: 10 }, (_, i) => (
					<Star
						key={i}
						rate={i + 1}
						tempRating={tempRating}
						setTempRating={setTempRating}
						userRating={userRating}
						setUserRating={setUserRating}
					/>
				))}
			</div>
			{userRating > 0 && (
				<button
					onClick={handleClick}
					className="mt-4 w-full rounded-full bg-emerald-500 text-white text-sm font-medium text-center py-1 active:scale-95"
				>
					+ Add to list
				</button>
			)}
		</div>
	);
}

export function Star({
	rate,
	userRating,
	setUserRating,
	tempRating,
	setTempRating,
}) {
	const filled = userRating >= rate || tempRating >= rate;

	return (
		<div
			className="w-5"
			onClick={() => setUserRating(rate)}
			onMouseEnter={() => setTempRating(rate)}
			onMouseLeave={() => setTempRating(0)}
		>
			{filled && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#fcc419"
					viewBox="0 0 20 20"
					stroke="#fcc419"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
				</svg>
			)}
			{!filled && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#fcc419"
				>
					<path
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="{2}"
					></path>
				</svg>
			)}
		</div>
	);
}
