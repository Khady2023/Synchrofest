import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home' 
import Login from './pages/Login'
import Signup from './pages/Signup'
import Ticket from './pages/Ticket'
import Concert from './pages/Concert'
import Bookseat from './pages/Bookseat'



function App() {
  return (
    <>
    <div className='w-screen h-full bg-stone-100'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/ticket' element={<Ticket />} />
      <Route path='/concert' element={<Concert />} />
      <Route path='/bookseat' element={<Bookseat />} />
      </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
