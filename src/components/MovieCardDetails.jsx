import React, { useEffect } from "react";
import { MovieRatingWidget } from "./";
export default function MovieCardDetails({ selectedMovie }) {
	const {
		Poster: poster,
		Title: title,
		Released: releaseDate,
		Runtime: duration,
		Genre: genre,
		imdbRating: rating,
		Plot: plot,
		Actors: actors,
		Director: director

	} = selectedMovie;

	return (
		<>
			<div className="flex gap-6 items-center text-gray-50 bg-white/5 ">
				<div className="w-16 sm:w-20 md:w-24">
					<img
						src={poster}
						alt="poster"
					/>
				</div>
				<div className="box text-center">
					<h3 className="title font-medium mb-3 text-lg">{title}</h3>
					<div className="box text-xs text-white space-y-2">
						<p className="">{releaseDate} . {duration}</p>
						<p className="text-xs">{genre}</p>
						<p className="text-xs">⭐️ {rating} IMDb rating</p>
					</div>
				</div>
			</div>
			<div className="box p-8 text-gray-100 text-xs space-y-4">
				<MovieRatingWidget />
				<p className="summary ">
					{plot}
				</p>
				<p className="actors">
					Starring {actors}
				</p>
				<p className="director">Directed by {director}</p>
			</div>
		</>
	);
}
