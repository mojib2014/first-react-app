import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Logout from './Logout';

const NavBar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? ('active' ? isPending : 'pending') : ''
          }
          to="/"
        >
          Home
        </NavLink>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/blog/posts">Posts</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        {isLoggedIn && <Logout />}
      </nav>
    </header>
  );
};

export default NavBar;
