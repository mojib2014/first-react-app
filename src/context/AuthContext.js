import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const localIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [user, setUser] = useState({
    id: 1,
    username: 'test@user.com',
    password: '123test',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(username, password) {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  }

  function logout() {
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsLoggedIn(localIsLoggedIn);
  }, [isLoggedIn, localIsLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
