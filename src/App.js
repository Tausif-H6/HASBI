import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "./styles/Navbar.scss";
import "./styles/Cart.scss";
import "./styles/Home.scss";
import "./styles/Product.scss";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { ShopContextProvider } from './context/ShopContext';
import Cart from './Components/Cart';

function App() {
  return (
    
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
