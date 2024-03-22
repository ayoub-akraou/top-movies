import React from "react";
import { MovieCard } from "./";
export default function MoviesList() {
	return (
		<ul className="text-gray-50">
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
		</ul>
	);
}
