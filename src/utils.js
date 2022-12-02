export function getMoviesByName(name, type) {
  delete process.env.REACT_APP_API_KEY;
  console.log(process.env.REACT_APP_API_KEY);
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}&type=${type}`
  );
}

export function getMovieById(movieId) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`
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
