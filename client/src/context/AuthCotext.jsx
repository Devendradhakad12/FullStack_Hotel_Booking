import { createContext, useEffect, useReducer } from "react";

const INTIAL_VALUE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
   token:JSON.parse(localStorage.getItem("token")) || null,
  loading: false,
  error: false,
};
const AuthContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token:null,
        loading: true,
        error: false,

      };
    case "LOGIN_SUCCESFUL":
      return {
        user: action.payload,
        token:action.token,
        loading: false,
        error: false,
      };
    case "LOGIN_FAILD":
      return {
        user: null,
        token:null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        token:null,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INTIAL_VALUE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state.user,state.token]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
