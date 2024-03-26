import React from "react";

export default function WatchedMovieCard({ movie, setWatched }) {
	const { poster, title, imdbRating, userRating, duration, id } = movie;

	function handleClick() {
		setWatched((watched) => {
			const newWatched = watched.filter((movie) => movie.id !== id)
			return newWatched
		});
	}
	return (
		<li className="px-6 py-4 flex gap-5 items-center border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer">
			<div className="w-10">
				<img src={poster} alt="" />
			</div>
			<div className="box text-sm flex-1">
				<h3 className="title font-semibold mb-1">{title}</h3>
				<div className="infos flex gap-4 items-center">
					<p className="imdb-rating">⭐ {imdbRating}</p>
					<p className="user-rating">🌟 {userRating}</p>
					<p className="duration">⌛ {duration} min</p>
					<button
						onClick={handleClick}
						className="rounded-full w-4 h-4 flex items-center justify-center bg-red-500 text-black text-sm"
					>
						x
					</button>
				</div>
			</div>
		</li>
	);
}
