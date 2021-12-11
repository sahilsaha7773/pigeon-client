import './App.css';
import Login from './components/Login';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import SendMessage from './pages/SendMessage';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message/:id" element={<SendMessage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
