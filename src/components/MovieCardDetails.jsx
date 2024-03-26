import { useState, useEffect } from "react";
import { MovieRatingWidget, Loading, ErrorMessage } from "./";
export default function MovieCardDetails({
	selectedMovieId,
	setSelectedMovieId,
	KEY,
	watched,
	setWatched,
}) {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [userRating, setRating] = useState(0);

	useEffect(
		function () {
			(async () => {
				try {
					if (!selectedMovieId) return;
					setIsLoading(true);
					setError("");
					const response = await fetch(
						`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`
					);
					const result = await response.json();
					setMovie(result);
				} catch (error) {
					setError(error.message);
				} finally {
					setIsLoading(false);
				}
			})();
		},
		[selectedMovieId]
	);

	const { Title: title } = movie;
	useEffect(() => {
		if (selectedMovieId && title) document.title = `Movie | ${title}`;

		return () => {
			document.title = "topMovies";
		};
	}, [selectedMovieId, title]);

	useEffect(function () {
		function handleEvent(e) {
			setSelectedMovieId(null);
			console.log(1);
		}
		document.addEventListener("keydown", handleEvent);
		return function () {
			document.removeEventListener("keydown", handleEvent);
		};
	}, []);

	const isRated = watched.every(
		(watchedMovie) => watchedMovie.id !== movie.imdbID
	);
	const ratedMovie = watched.find(
		(watchedMovie) => watchedMovie.id === movie.imdbID
	);
	return (
		<>
			{isLoading && <Loading />}
			{error && <ErrorMessage error={error} />}
			{!isLoading && !error.length && (
				<>
					<CardHeader movie={movie} />
					<section className="box p-8 text-gray-100 text-xs space-y-4">
						{isRated ? (
							<MovieRatingWidget
								userRating={userRating}
								setUserRating={setRating}
								movie={movie}
								watched={watched}
								setWatched={setWatched}
								setSelectedMovieId={setSelectedMovieId}
							/>
						) : (
							<p className="text-center p-4 rounded-lg bg-white/10">
								you rated this movie with {ratedMovie.userRating} 🌟
							</p>
						)}
						<Details movie={movie} />
					</section>
				</>
			)}
		</>
	);
}

export function CardHeader({ movie }) {
	const {
		Poster: poster,
		Title: title,
		Released: releaseDate,
		Runtime: duration,
		Genre: genre,
		imdbRating: rating,
	} = movie;
	return (
		<header className="flex gap-6 items-center text-gray-50 bg-white/5 ">
			<div className="w-16 sm:w-20 md:w-24">
				<img src={poster} alt="poster" />
			</div>
			<div className="box text-center">
				<h3 className="title font-medium mb-3 text-lg">{title}</h3>
				<div className="box text-xs text-white space-y-2">
					<p className="">
						{releaseDate} . {duration}
					</p>
					<p className="text-xs">{genre}</p>
					<p className="text-xs">⭐️ {rating} IMDb rating</p>
				</div>
			</div>
		</header>
	);
}

export function Details({ movie }) {
	const { Plot: plot, Actors: actors, Director: director } = movie;
	return (
		<>
			<p className="summary ">{plot}</p>
			<p className="actors">Starring {actors}</p>
			<p className="director">Directed by {director}</p>
		</>
	);
}
