import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home'
function App() {
  return (
    <div className='AppCSS'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
