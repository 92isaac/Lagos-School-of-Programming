import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbarfiles/NavBar';
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
<NavBar/>
<Routes>
<Route path="/" element={ <Home/> } />
</Routes>
    </Router>
  );
}

export default App;
