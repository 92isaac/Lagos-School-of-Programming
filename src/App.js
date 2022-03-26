import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footerfiles/Footer';
import Home from './components/pages/Home'
import Company from './components/Company'
import Executive from './components/Executive'
import Contact from './components/Contact'
import Team2 from './components/Team2'
import Mentors from './components/Mentors'
import Blog from './components/pages/Blog'

function App() {
  return (
    <Router>


<Routes>
<Route path="/" element={ <Home/> } />
<Route path="/company" element={ <Company/> } />
<Route path="/team" element={ <Team2/> } />
<Route path="/mentor" element={ <Mentors/> } />
<Route path="/director" element={ <Executive/> } />
<Route path="/contact" element={ <Contact/> } />
<Route path="/blog" element={ <Blog/> } />
</Routes>
<Footer/> 
    </Router>
  );
}

export default App;
