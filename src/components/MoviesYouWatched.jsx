import React from "react";

export default function MoviesYouWatched() {
	return (
		<div className="px-6 py-5 bg-white/5 rounded-xl">
			<h2 className="uppercase font-medium mb-2">movies you watched</h2>
			<div className="box text-sm flex gap-2">
				<span className="movies-number">#️⃣ 2 movies</span>
				<span className="average-rate">⭐️ 7.80</span>
				<span className="my-averavge-rate">🌟 8.00</span>
				<span className="average-duration">⏳ 134.5 min</span>
			</div>
		</div>
	);
}
