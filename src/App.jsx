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
	const [selectedMovieId, setSelectedMovieId] = useState("");
	const [selectedMovie, setSelectedMovie] = useState({});
	console.log(selectedMovieId);
	function handleChange(e) {
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

	useEffect(
		function () {
			(async () => {
				if (!selectedMovieId) return;
				setSelectedMovie(null)
				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
				);
				const result = await response.json();
				setSelectedMovie(result)
			})();
		},
		[selectedMovieId]
	);
	return (
		<>
			<Header>
				<SearchBar query={query} onChange={handleChange} />
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
					<MoviesYouWatched />
					{selectedMovie ? (
						<MovieCardDetails selectedMovie={selectedMovie} />
					) : (
						<Loading />
					)}
				</Box>
			</main>
		</>
	);
}

export default App;
