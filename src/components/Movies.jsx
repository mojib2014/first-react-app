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
      <div className="container h-auto mb-5">
        <form onSubmit={onSubmit} className="row">
          <div className="col col-12 col-md-5">
            <input
              className="form-control p-3"
              id="exampleFormControlInput1"
              type="search"
              name="searchTerm"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies by Name, type, genre..."
            />
          </div>
          <div className="col col-12 col-md-5">
            <select
              id="type"
              className="form-select p-3"
              aria-label="Default select example"
              onChange={(e) => onTypeChange(e.target.value)}
            >
              <option defaultValue>Open this select menu</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          </div>
          <button
            type="submit"
            className="col col-12 col-md-2 btn btn-primary block p-3"
          >
            Search
          </button>
        </form>
      </div>
      <div className="movies row m-auto">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            handleGetMovieById={handleGetMovieById}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
