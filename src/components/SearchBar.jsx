import React, { useEffect, useRef, useState } from "react";

export default function SearchBar({
	className = "",
	query,
	onChange,
	setQuery,
	setSelectedMovieId,
}) {
	const SearchEl = useRef(null);

	useEffect(function () {
		SearchEl.current.focus();
		function callback(e) {
			console.log(e);
			if (document.activeElement !== SearchEl.current) {
				if (e.code === "Enter") {
					SearchEl.current.focus();
					setQuery("");
					setSelectedMovieId(null);
				}
			}
		}
		document.addEventListener("keydown", callback);
		return function () {
			document.removeEventListener("keydown", callback);
		};
	}, []);
	return (
		<input
			value={query}
			onChange={onChange}
			type="search"
			placeholder="Search movies..."
			className={`${className} w-[clamp(200px,28vw,400px)] bg-white/15 rounded-md px-4 py-2 shadow-md  outline-none focus:shadow-lg focus:-translate-y-[2px] transition-all placeholder:text-gray-100 placeholder:font-thin`}
			ref={SearchEl}
		></input>
	);
}
