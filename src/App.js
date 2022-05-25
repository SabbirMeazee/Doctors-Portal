import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appoinment/Appointment";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";



function App() {
  return (
    <div className='px-12 lg:max-w-full'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
