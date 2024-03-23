import React from "react";
import { MovieCard } from "./";
export default function MoviesList({ movies, setSelectedMovieId }) {
	return (
		<ul className="text-gray-50">
			{movies?.map((movie, i) => (
				<MovieCard movie={movie} key={i} setSelectedMovieId={setSelectedMovieId} />
			))}
		</ul>
	);
}
