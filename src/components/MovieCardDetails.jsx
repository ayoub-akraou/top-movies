import React from "react";
import { MovieRatingWidget } from "./";
export default function MovieCardDetails() {
	return (
		<>
			<div className="flex gap-6 items-center text-gray-50 bg-white/5 ">
				<div className="w-16 sm:w-20 md:w-24">
					<img
						src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
						alt=""
					/>
				</div>
				<div className="box text-center">
					<h3 className="title font-medium mb-3 text-lg">Spider-Man</h3>
					<div className="box text-xs text-white space-y-2">
						<p className="">03 May 2002 . 121 min</p>
						<p className="text-xs">Action, Adventure, Sci-Fi</p>
						<p className="text-xs">⭐️ 7.4 IMDb rating</p>
					</div>
				</div>
			</div>
			<div className="box px-8 text-gray-100 text-xs space-y-4">
				<MovieRatingWidget />
				<p className="summary ">
					After being bitten by a genetically-modified spider, a shy
					teenager gains spider-like abilities that he uses to fight
					injustice as a masked superhero and face a vengeful enemy.
				</p>
				<p className="actors">
					Starring Tobey Maguire, Kirsten Dunst, Willem Dafoe
				</p>
				<p className="director">Directed by Sam Raimi</p>
			</div>
		</>
	);
}
