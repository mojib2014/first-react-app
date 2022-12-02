import React, { useState, useRef, useEffect } from 'react';

export default function Form() {
  const [form, setForm] = useState({ name: 'John', email: '', password: '' });
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    ref.current.style.border = '2px solid orange';
  }, []);
  // console.log(ref.current);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        ref={ref}
        style={{ display: 'block' }}
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        style={{ display: 'block' }}
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        style={{ display: 'block' }}
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
