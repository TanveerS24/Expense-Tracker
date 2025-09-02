import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Welcome from './pages/Welcome'; 
import Home from './pages/Home';
import Login from './pages/Login';
import AddRecord from './pages/AddRecord';
import Register from './pages/Register'; 
import UserDetails from "./pages/UserDetails";
import PageNotFound from './pages/PageNotFound';

import About from './components/About';
import Navbar from './components/Navbar';

import LightRays from './react-bits/LightRays';

const Layout = () => (
  <div className="relative min-h-screen">
    <div className="absolute inset-0 -z-10">
      <LightRays />
    </div>
    <Navbar />
    <div className="relative z-10">
      <Outlet />
    </div>
  </div>
);


const App = () => {
  const loggedin = sessionStorage.getItem('user') === null;

  return (
    <div>
      <About />
      <Routes>
        <Route path="/" element={loggedin ? <Welcome /> : <Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/newRecord" element={<AddRecord />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
