import React, { useEffect, useState } from "react";

export default function SearchBar({ className = "", query, onChange}) {
	return (
		<input
			value={query}
			onChange={onChange}
			type="search"
			placeholder="Search movies..."
			className={`${className} w-[clamp(200px,28vw,400px)] bg-white/15 rounded-md px-4 py-2 shadow-md  outline-none focus:shadow-lg focus:-translate-y-[2px] transition-all placeholder:text-gray-100 placeholder:font-thin`}
		></input>
	);
}
