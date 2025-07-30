import Login from './Components/login.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/signup.jsx';
import Home from './Components/home.jsx';
import Click from './Components/Button.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contactus.jsx';
import Profile from './Components/profile.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/button' element={<Click />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
