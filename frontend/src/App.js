
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
   <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Signup/>}/>
        <Route exact path ="/login" element={<Login/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
