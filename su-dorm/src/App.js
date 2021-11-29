import Login from './components/Login';
import Signup from './components/Signup';
import SideBar from './components/SideBar';
import MatchForm from './components/MatchForm';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Match from './components/Match';
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
        <Route path="/matchForm" element={<MatchForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
