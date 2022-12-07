import { useState, useEffect, useCallback } from 'react';
import MovieDetails from './components/movieDetails';
// import Greeting from './components/Greeting';
import Movies from './components/Movies';
// import Clock from './components/Clock';
import { getMoviesByName, getMovieById } from './utils';
// import Box from './components/Box';
// import Form from './components/Form';
import Modal from './components/Modal';
// import styles from './components/Box.module.css';
// import Alert from 'react-bootstrap/Alert';
// import { useRef } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/Pagination';
import Login from './components/Login';
import Logout from './components/Logout';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';

// const Message = (props) => (
//   <div>
//     {props.msg}, {props.name}
//   </div>
// );

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [searchTerm, setSearchTerm] = useState('Batman');
  const [type, setType] = useState('movie');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function getMovies() {
    setIsLoading(true);
    try {
      const result = await getMoviesByName(searchTerm, type, page);
      const res = await result.json();
      setTotalPages(Math.ceil(res.totalResults / 10));
      setMovies(res.Search);
      setIsLoading(false);
    } catch (err) {
      console.log('errorrrrrrr', err.message);
      setIsLoading(false);
      setError(err.message);
    }
  }

  const handleGetMovieById = async (movieId) => {
    const res = await getMovieById(movieId);
    const movie = await res.json();
    console.log('movie id ', movie);
    setMovie(movie);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await getMoviesByName(searchTerm, type);
      const { Search } = await result.json();

      setMovies(Search);
    },
    [searchTerm, type]
  );

  useEffect(() => {
    getMovies();
    // document.querySelector('input').addEventListener('click', () => {});
    return () => {};
  }, []);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  // Route parameter { params } => { movieId: 1}
  return (
    <div className="App mt-5">
      <NavBar />
      <Logout />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetails
              movie={movie}
              handleGetMovieById={handleGetMovieById}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              handleGetMovieById={handleGetMovieById}
              movies={movies}
              setSearchTerm={setSearchTerm}
              onTypeChange={setType}
              setOpen={setOpen}
              onSubmit={handleSubmit}
            />
          }
        />
      </Routes>
      {/* <Alert variant="warning">This is React bootstrap alert component</Alert> */}
      {open && (
        <Modal onCloseModal={setOpen}>
          <MovieDetails movie={movie} />
        </Modal>
      )}
      {/* <Form />
      <Box className={styles.boxLarge} children="Box Large" />
      <Box className={styles.boxMedium}>Box Medium</Box>
      <Box className={styles.boxSmall}>Box Small</Box>
      <Clock date={new Date().toLocaleTimeString()} />
      <Greeting /> */}
      <Pagination pageNumbers={pageNumbers} page={page} setPage={setPage} />

      <Pagination pageNumbers={pageNumbers} page={page} setPage={setPage} />
    </div>
  );
}

// const PropsTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== 'string') {
//       return new Error(
//         `Hey ${propName} must be a string you passed ${typeof props.msg} in component ${componentName}.`
//       );
//     }
//   },
//   number(props, propName, componentName) {
//     if (typeof props[propName] !== 'number')
//       return new Error(
//         `Hey expecting number you passed ${typeof props[propName]}`
//       );
//   },
// };

// Message.propTypes = {
//   msg: PropsTypes.string,
//   name: PropsTypes.number,
// };

export default App;
