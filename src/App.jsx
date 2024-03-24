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

} from "./components";

const KEY = "f4078131";

function App() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [selectedMovieId, setSelectedMovieId] = useState(null);
	const [watched, setWatched] = useState([]);
console.log(watched);
	function updateQuery(e) {
		setQuery(e.target.value);
		setError("");
	}

	useEffect(() => {
		(async function () {
			try {
				if (query.length < 3) return setMovies([]);

				setIsLoading(true);
				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
				);
				const result = await response.json();
				if (!response.ok) throw new Error("Something went wrong!");
				if (result.Response === "False") throw new Error(result.Error);
				setMovies(result?.Search);
			} catch (error) {
				setError(error.message);
				setMovies([]);
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [query]);

	return (
		<>
			<Header>
				<SearchBar query={query} onChange={updateQuery} />
			</Header>
			<main className="flex gap-6 mt-6 w-11/12 md:max-w-[75%] mx-auto">
				<Box className="flex-1">
					<ShowHideButton>+</ShowHideButton>
					{!isLoading && (
						<MoviesList
							movies={movies}
							setSelectedMovieId={setSelectedMovieId}
						/>
					)}
					{isLoading && <Loading />}
					{error && <ErrorMessage error={error} />}
				</Box>

				<Box className="flex-1">
					<ShowHideButton>+</ShowHideButton>
					{!selectedMovieId && <MoviesYouWatched watched={watched} setWatched={setWatched} />}
					{selectedMovieId && (
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
