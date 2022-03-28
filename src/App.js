import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Fullstack from './components/frontendFoFiles/Fullstack'
import FAQPage from './components/faqfiles/FAQPage'

function App() {
  return (
    <Router>
<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/fullstack" element={ <Fullstack/> } />
<Route path="/FAQPage" element={ <FAQPage/> } />
</Routes>
    </Router>
  );
}

export default App;
