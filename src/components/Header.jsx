import React from "react";
import {Logo, SearchBar} from "./"

export default function Header({children, numberOfResults}) {
	return (
		<header className="bg-emerald-500 rounded-lg flex justify-between px-6 py-4 text-white items-center">
			<Logo />
			{children}
			<NumberOfResults numberOfResults={numberOfResults}/>
		</header>
	);
}

export function NumberOfResults({numberOfResults}) {
	return (
	  <p className='text-sm'>Found <strong>{numberOfResults}</strong> results</p>
	)
 }
