import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from "./pages/about";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/signIn" element={<SignIn/>}/> 
      <Route path="/signUp" element={<SignUp/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/Profile" element={<Profile/>}/> 
    </Routes>
  </BrowserRouter>;
}
