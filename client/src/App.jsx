import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/roomlist/List'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/list' element={<List/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
