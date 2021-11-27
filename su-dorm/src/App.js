import Login from './components/Login';
import Signup from './components/Signup';
import SideBar from './components/SideBar';
import MatchForm from './components/MatchForm';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/match" element={<MatchForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
