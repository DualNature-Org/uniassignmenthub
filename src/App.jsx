import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Main from './Pages/Main.jsx';
import About from './Pages/About.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Components/Footer.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Samples from './Pages/Samples.jsx';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/sample' element={<Samples/>}/>
    </Routes>   
    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
