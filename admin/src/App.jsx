import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import {roomsColumns, userColumns} from './dataTableColumns'
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
            <Route path="new" element={<New formData={"user"}/>} />
          </Route>
          <Route path="/bookedrooms">   
            <Route index element={<List columns={roomsColumns} />} />
            <Route path="new" element={<New formData={"booked room"}/>} />
          </Route>
          <Route path="/rooms">
            <Route index element={<List columns={roomsColumns} />} />
            <Route path="new" element={<New formData={"rooms"}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
