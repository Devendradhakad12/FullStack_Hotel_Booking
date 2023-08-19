import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Rooms from "./pages/rooms/Rooms"
import Users from "./pages/users/Users"
import BookedRooms from "./pages/bookedrooms/BookedRooms"
function App() {
  

  return (
    <>
   <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/rooms" element={<Rooms/>} />
  <Route path="/bookedrooms" element={<BookedRooms/>} />
  <Route path="/users" element={<Users/>} />
</Routes>
   </BrowserRouter>
    </>
  )
}

export default App
