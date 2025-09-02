import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'; 
import Home from './pages/Home';
import Login from './pages/Login';
import AddRecord from './pages/AddRecord';
import Register from './pages/Register'; 
import UserDetails from "./pages/UserDetails";
import PageNotFound from './pages/PageNotFound';

import About from './components/About';

const App = () => {
  const loggedin = sessionStorage.getItem('user') === null;

  return (
    <div>
      <About />
      <Routes>
        <Route path='/' element={loggedin ? <Welcome /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newRecord" element={<AddRecord />} />
        <Route path="/register" element={<Register />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;