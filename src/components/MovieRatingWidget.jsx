import React from "react";

export default function MovieRatingWidget() {
	return (
		<div className="rounded-lg mx-auto mt-8 bg-white/5 px-6 py-4">
			<RatingStars />
			<button className="w-full rounded-full bg-emerald-500 text-white text-sm font-medium text-center py-1 active:scale-95">
					+ Add to list{" "}
				</button>
		</div>
	);
}

export function RatingStars() {
   return (<div className="flex mb-4">
	{Array.from({ length: 10 }, (_, i) => (
		<Star key={i} rate={i + 1} />
	))}
	
</div>)
}

export function Star({ filled = false, rate }) {
	return (
		<div className="w-5">
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
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="{2}"
					></path>
				</svg>
			)}
		</div>
	);
}
