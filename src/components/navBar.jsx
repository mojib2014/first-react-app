import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
    );
  }
}

export default NavBar;
