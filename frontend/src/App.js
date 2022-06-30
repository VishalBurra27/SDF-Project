
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dash';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/StudentDash/:id" element={<Dashboard />} />
          {/* <Route path="/InstructorDash/:id" element={<IDashboard />} /> */}
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/signup/:role" element={<SignupPage />} />
        </Routes>
      </Router>
  );
}

export default App;
