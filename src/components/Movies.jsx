import MovieCard from './movieCard';

function Movies({
  movies,
  setSearchTerm,
  onTypeChange,
  handleGetMovieById,
  setOpen,
  onSubmit,
}) {
  return (
    <>
      <div className="container">
        <form
          onSubmit={onSubmit}
          className="row g-3 w-100 m-auto text-center d-flex"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              type="search"
              name="searchTerm"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies by Name, type, genre..."
            />
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => onTypeChange(e.target.value)}
          >
            <option defaultValue>Open this select menu</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div className="movies row">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
            movieId={movie.imdbID}
            handleGetMovieById={handleGetMovieById}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
