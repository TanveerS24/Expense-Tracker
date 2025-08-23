import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'; 
import Home from './pages/Home'; // Make sure this exists
import Login from './pages/Login'; // Make sure this exists
import Register from './pages/Register'; // Make sure this exists

const App = () => {
  const loggedin = sessionStorage.getItem('user') === null 
  return (
    <div>
      <Routes>
        <Route path='/' element={loggedin ? <Welcome /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;