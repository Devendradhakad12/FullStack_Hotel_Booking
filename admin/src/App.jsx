import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import {roomsColumns, userColumns} from './constants/dataTableColumns'
import NewUser from "./pages/newuser/NewUser";
import NewRoom from "./pages/newroom/NewRoom";
import NewBookedRoom from "./pages/newbookedroom/NewBookRoom";
import { userInputs } from "./constants/formSource";
import ViewSingle from "./pages/viewSingle/ViewSingle";
import ViewSingleRoom from "./pages/viewSingleRoom/ViewSingleRoom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="users">     
            <Route index element={<List columns={userColumns} />} />
            <Route path="new" element={<NewUser inputs={userInputs}/>} />
            <Route path=":id" element={<ViewSingle/>} />
          </Route>
          <Route path="/bookedrooms">   
            <Route index element={<List columns={roomsColumns} />} />
            <Route path="new" element={<NewBookedRoom inputs={"booked room"} />} />
            <Route path=":id" element={<ViewSingleRoom/>} />
          </Route>
          <Route path="/rooms">
            <Route index element={<List columns={roomsColumns} />} />
            <Route path="new" element={ <NewRoom inputs={"booked room"}/> } />
            <Route path=":id" element={<ViewSingleRoom/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
