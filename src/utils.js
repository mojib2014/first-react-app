export function getMoviesByName(name, type, page = 1) {
  return fetch(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}&type=${type}&page=${page}`
  );
}

export function getMovieById(movieId) {
  return fetch(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`
  );
}

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(this.name, this);
  }
}

const john = new Person('John');

console.log(john.name);
console.log(john.talk);
