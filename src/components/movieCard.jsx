import './movieCard.css';
import { Link } from 'react-router-dom';
import { Button } from '../common/button';

/**
  name: props 
  {}
  props { title: 'Black hawk', type: '', posterUrl: '', name: 'Mojib'}
 */

export default function MovieCard({ movie, handleGetMovieById, setOpen }) {
  const handleClick = () => {
    handleGetMovieById(movie.imdbID);
    setOpen(true);
  };
  return (
    <div className="text-center border rounded-end shadow-lg p-3 mb-5 bg-body rounded movie-card">
      <img src={movie?.Poster} alt={movie?.Title} />
      <div className="text-center my-3">
        <h4>
          {movie.Title.length > 20
            ? `${movie.Title.slice(0, 24)}...`
            : movie?.Title}
        </h4>
      </div>

      <Link
        to={`/movies/${movie.imdbID}`}
        className="btn btn-danger p-1 text-center align-self-center"
      >
        Movie
      </Link>
    </div>
  );
}

MovieCard.defaultProps = {
  title: '',
};
