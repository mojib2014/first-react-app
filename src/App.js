import { useState, useEffect, useCallback } from 'react';
import MovieDetails from './components/movieDetails';
import Greeting from './components/Greeting';
import Movies from './components/Movies';
import Clock from './components/Clock';
import { getMoviesByName, getMovieById } from './utils';
import Box from './components/Box';
import Form from './components/Form';
import Modal from './components/Modal';
import styles from './components/Box.module.css';
import Alert from 'react-bootstrap/Alert';
import { useRef } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Message = (props) => (
  <div>
    {props.msg}, {props.name}
  </div>
);

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [searchTerm, setSearchTerm] = useState('Batman');
  const [type, setType] = useState('movie');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  async function getMovies() {
    setIsLoading(true);
    try {
      const result = await getMoviesByName(searchTerm, type);
      const res = await result.json();
      console.log('result', res);
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
    setMovie(movie);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log('Search Term ', searchTerm);
      const result = await getMoviesByName(searchTerm, type);
      console.log('result', result);
      const { Search } = await result.json();
      console.log('Search: ', Search);

      setMovies(Search);
    },
    [searchTerm, type]
  );

  useEffect(() => {
    getMovies();
    // document.querySelector('input').addEventListener('click', () => {});
    return () => {};
  }, []);

  console.log(type);

  return (
    <div className="App">
      <Alert variant="warning">This is React bootstrap alert component</Alert>
      {open && (
        <Modal onCloseModal={setOpen}>
          <MovieDetails movie={movie} />
        </Modal>
      )}
      <Form />
      <Box className={styles.boxLarge} children="Box Large" />
      <Box className={styles.boxMedium}>Box Medium</Box>
      <Box className={styles.boxSmall}>Box Small</Box>
      <Clock date={new Date().toLocaleTimeString()} />
      <Greeting />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Sorry something went wrong, {error}</h1>
      ) : (
        <Movies
          handleGetMovieById={handleGetMovieById}
          movies={movies}
          setSearchTerm={setSearchTerm}
          onTypeChange={setType}
          setOpen={setOpen}
          onSubmit={handleSubmit}
        />
      )}
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
