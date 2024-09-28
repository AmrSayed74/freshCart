import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, [userToken]);
  function loginUser(data) {
    setUserData(data);
  }
  return (
    <AuthContext.Provider value={{ userData, loginUser, userToken }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("wrap this component with authContext");
  return ctx;
}

export { useAuth, AuthProvider };
