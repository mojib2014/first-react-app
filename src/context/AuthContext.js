import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'test@user.com',
    password: '123test',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  function login(username, password) {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
