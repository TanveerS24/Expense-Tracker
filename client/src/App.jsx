import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import PageNotFound from './pages/PageNotFound';

const App = () => {
  const loggedin = sessionStorage.getItem('user') === null;

  return (
    <div>
      <Routes>
        <Route path='/' element={loggedin ? <Welcome /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;