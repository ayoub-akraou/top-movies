import { useState } from "react";
import "./App.css";
import {
	Header,
	Box,
	MoviesList,
	MoviesYouWatched,
	ShowHideButton,
	MovieCardDetails,
	Loading
} from "./components";

function App() {
	return (
		<>
			<Header />
			<main className="flex gap-6 mt-6 w-11/12 md:max-w-[75%] mx-auto">
				<Box className="flex-1">
					<ShowHideButton >+</ShowHideButton>
					<MoviesList />
				</Box>

				<Box className="flex-1">
					<ShowHideButton >+</ShowHideButton>
					{/* <MoviesYouWatched /> */}
					{/* <MovieCardDetails /> */}
					<Loading />
				</Box>
			</main>
		</>
	);
}

export default App;
