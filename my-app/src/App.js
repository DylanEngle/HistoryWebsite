import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element = {<HomePage/>}/>
        <Route path='/login' index element = {<LoginPage/>}/>
        <Route path='/landing' index element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
