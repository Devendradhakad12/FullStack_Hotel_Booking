import { createContext, useEffect, useReducer } from "react";
const intial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };

    case "LOGIN_FAIL":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intial_state);
  useEffect(()=>{
localStorage.setItem("user",JSON.stringify(state.user))
  },[state.user])
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
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
