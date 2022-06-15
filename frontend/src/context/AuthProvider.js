import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [chosenProducts, setChosenProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loggedIn,
        setLoggedIn,
        loading,
        setLoading,
        setChosenProducts,
        chosenProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
