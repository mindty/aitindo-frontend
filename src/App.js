import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from "./components/navbar/navbar.jsx";
import ScrollButton from './components/scrollButton/scroll.jsx';
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import Contact from './pages/contact'
import './App.css';

const App = () => {
  return  <Router>
            <NavBar/>
            <ParallaxProvider>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
              </ParallaxProvider>
              <ScrollButton/>
          </Router>
}
export default App;
