import { useState, useEffect } from "react";
import "./App.css";
import {
	Header,
	SearchBar,
	Box,
	MoviesList,
	MoviesYouWatched,
	ShowHideButton,
	MovieCardDetails,
	Loading,
	ErrorMessage,
	Logo,
} from "./components";

const KEY = "f4078131";

function App() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [selectedMovieId, setSelectedMovieId] = useState(null);
	const [watched, setWatched] = useState(function () {
		if (!localStorage.getItem("watched")) return [];
		return JSON.parse(localStorage.getItem("watched"));
	});
	console.log(watched);
	const [showMoviesList, setShowMoviesList] = useState(true);
	const [showMovieDetails, setShowMovieDetails] = useState(true);
	function updateQuery(e) {
		setQuery(e.target.value);
		setSelectedMovieId(null);
		setError("");
	}

	const controller = new AbortController();
	useEffect(() => {
		(async function () {
			try {
				if (query.length < 3) return setMovies([]);

				setIsLoading(true);
				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{ signal: controller.signal }
				);
				const result = await response.json();
				if (!response.ok) throw new Error("Something went wrong!");
				if (result.Response === "False") throw new Error(result.Error);
				setMovies(result?.Search);
			} catch (error) {
				setMovies([]);
				if (error.name !== "AbortError") setError(error.message);
			} finally {
				setIsLoading(false);
			}
		})();
		return () => {
			controller.abort();
		};
	}, [query]);
	
	useEffect(
		function () {
			localStorage.setItem("watched", JSON.stringify(watched));
		},
		[watched]
	);
	return (
		<>
			<Header numberOfResults={movies.length}>
				<SearchBar query={query} onChange={updateQuery} setQuery={setQuery} setSelectedMovieId={setSelectedMovieId}/>
			</Header>
			<main className="flex gap-6 mt-6 w-11/12 md:max-w-[75%] mx-auto">
				<Box className="flex-1">
					<ShowHideButton
						onClick={() => setShowMoviesList((curr) => !curr)}
					>
						{showMoviesList ? "-" : "+"}
					</ShowHideButton>
					{!isLoading && showMoviesList && (
						<MoviesList
							movies={movies}
							setSelectedMovieId={setSelectedMovieId}
						/>
					)}
					{isLoading && <Loading />}
					{error && <ErrorMessage error={error} />}
				</Box>

				<Box className="flex-1">
					<ShowHideButton
						onClick={() => setShowMovieDetails((curr) => !curr)}
					>
						{showMovieDetails ? "-" : "+"}
					</ShowHideButton>
					{!selectedMovieId && showMovieDetails && (
						<MoviesYouWatched watched={watched} setWatched={setWatched} />
					)}
					{selectedMovieId && showMovieDetails && (
						<MovieCardDetails
							KEY={KEY}
							selectedMovieId={selectedMovieId}
							setSelectedMovieId={setSelectedMovieId}
							watched={watched}
							setWatched={setWatched}
						/>
					)}
				</Box>
			</main>
		</>
	);
}

export default App;
