import { createContext, useEffect, useReducer } from "react";
const intial_state = {
  user: JSON.parse(localStorage.getItem("adn")) || null,
  token:JSON.parse(localStorage.getItem("adtk")) || null,
  loading: false,
  error: null,
};

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token:null,
        loading: true,
        error: null,
      };

    case "LOGIN_FAIL":
      return {
        user: null,
        token:null,
        loading: false,
        error: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        token:action.token,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        token:null,
        loading: false,
        error: null,
      };

    default: 
      return state;
  }
};

const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intial_state);
  useEffect(() => {
    localStorage.setItem("adn", JSON.stringify(state.user));
    localStorage.setItem("adtk", JSON.stringify(state.token));
  }, [state.user,state.token]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token:state.token,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthcontextProvider };
