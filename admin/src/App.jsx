import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { roomsColumns, userColumns } from "./constants/dataTableColumns";
import NewUser from "./pages/newuser/NewUser";
import NewRoom from "./pages/newroom/NewRoom";
import NewBookedRoom from "./pages/newbookedroom/NewBookRoom";
import { roomInputs, userInputs } from "./constants/formSource";
import ViewSingle from "./pages/viewSingle/ViewSingle";
import ViewSingleRoom from "./pages/viewSingleRoom/ViewSingleRoom";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import Forgot from "./pages/forgotPassword/Forgot";
function App() {
  const { user } = useContext(AuthContext);

  function Provider({ children }) {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              index
              element={
                <Provider>
                  <Home />
                </Provider>
              }
            />
          </Route>
          <Route path="users">
            <Route
              index
              element={
                <Provider>
                  <List columns={userColumns} />
                </Provider>
              }
            />
            <Route
              path="new"
              element={
                <Provider>
                  <NewUser inputs={userInputs} />
                </Provider>
              }
            />
            <Route
              path=":id"
              element={
                <Provider>
                  <ViewSingle />
                </Provider>
              }
            />
          </Route>
          <Route path="/bookedrooms">
            <Route
              index
              element={
                <Provider>
                  <List columns={roomsColumns} />
                </Provider>
              }
            />
            <Route
              path="new"
              element={
                <Provider>
                  <NewBookedRoom inputs={roomInputs} />
                </Provider>
              }
            />
            <Route
              path=":id"
              element={
                <Provider>
                  <ViewSingleRoom />
                </Provider>
              }
            />
          </Route>
          <Route path="/rooms">
            <Route
              index
              element={
                <Provider>
                  <List columns={roomsColumns} />
                </Provider>
              }
            />
            <Route
              path="new"
              element={
                <Provider>
                  {" "}
                  <NewRoom inputs={roomInputs} />{" "}
                </Provider>
              }
            />
            <Route
              path=":id"
              element={
                <Provider>
                  <ViewSingleRoom />
                </Provider>
              }
            />
          </Route>
          <Route path="/forgot"  element={<Forgot />}/>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
