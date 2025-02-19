import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



function App() {
  return (
    <>
    <div className='w-screen h-screen px-8 lg:px-20 md:px-20 bg-stone-100'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
