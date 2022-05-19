import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d3605c875ccb2422ac537a9f079476c4&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="query" className="label">
                    Movie name
                </label>
                <input
                    type="text"
                    name="query"
                    value={query}
                    className="input"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="i.e. No Time to Die"
                />
                <button className="button" type="submit">
                    Search
                </button>
            </form>
            {loading && <p className="flash info">Loading...</p>}
            {error && <p className="flash error">{error}</p>}
            {!loading && !error && (
                <div className="card-list">
                    {movies &&
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>
            )}
        </div>
    );
}




// api_key=d3605c875ccb2422ac537a9f079476c4