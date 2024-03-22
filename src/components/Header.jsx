import React from "react";
import {Logo, SearchBar, NumberOfResults} from "./"

export default function Header() {
	return (
		<header className="bg-emerald-500 rounded-lg flex justify-between px-6 py-4 text-white items-center">
			<Logo />
			<SearchBar />
			<NumberOfResults />
		</header>
	);
}
