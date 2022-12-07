import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails({ movie, handleGetMovieById }) {
  const params = useParams();
  useEffect(() => {
    handleGetMovieById(params.movieId);
  }, [params.movieId]);
  return (
    <div className="movie-details row">
      <div className="col">
        <img src={movie.Poster} alt={movie.tile} />
      </div>
      <div className="col">
        <h2>{movie.title}</h2>
        <h3>Plot</h3>
        <p>{movie.Plot}</p>
        <p>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Type:</strong> {movie.Type}
        </p>
        <p>
          <strong>imdbID:</strong> {movie.imdbID}
        </p>
      </div>
    </div>
  );
}
