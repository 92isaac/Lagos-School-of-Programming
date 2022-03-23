import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footerfiles/Footer';
import Home from './components/pages/Home'
import Company from './components/Company'

function App() {
  return (
    <Router>


<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/company" element={ <Company/> } />
</Routes>
<Footer/> 
    </Router>
  );
}

export default App;
