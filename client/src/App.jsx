import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import SignUp from './pages/signup/SignUp'
import Rooms from './pages/roomlist/Rooms'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/rooms' element={<Rooms/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
