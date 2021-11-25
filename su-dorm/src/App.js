import Login from './components/Login';
import Signup from './components/Signup';
import SideBar from './components/SideBar';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
