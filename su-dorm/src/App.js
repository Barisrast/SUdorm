import Login from './components/Login';
import Signup from './components/Signup';
import SideBar from './components/SideBar';
import MatchForm from './components/MatchForm';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Match from './components/Match';
import SettingsProfile from './components/pages/SettingsProfile';
import PreferenceProfile from './components/pages/PreferencesProfile';
import MatchProfile from './components/pages/MatchProfile';
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
        <Route path="/preferences" element={<PreferenceProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<SettingsProfile />} />
        <Route path="/match" element={<MatchProfile />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
