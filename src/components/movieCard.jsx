import './movieCard.css';
import { Button } from '../common/button';

/**
  name: props 
  {}
  props { title: 'Black hawk', type: '', posterUrl: '', name: 'Mojib'}
 */

export default function MovieCard({
  title,
  type,
  posterUrl,
  movieId,
  handleGetMovieById,
  setOpen,
}) {
  const handleClick = () => {
    handleGetMovieById(movieId);
    setOpen(true);
  };
  return (
    <div className="movie-card col">
      <img src={posterUrl} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
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
