import './movieCard.css';
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
    <div className="movie-card col">
      <img src={movie?.Poster} alt={movie?.Title} />
      <div className="card-body">
        <h3>{movie?.Title}</h3>
      </div>

      <Button
        primary={true}
        onClick={handleClick}
        className="btn btn-danger fs-1"
      >
        Movie
      </Button>
    </div>
  );
}

MovieCard.defaultProps = {
  title: '',
};
