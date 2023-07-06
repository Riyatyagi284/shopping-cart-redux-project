
import "./index.css"
import Navbar from "./Components/Navbar"
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Wishlist from "./Pages/Wishlist"
import Contact from "./Pages/Contact"


function App() {
  return (
    <>
    <Navbar/>
    {/* in routes and route {r should be capital in both} */}
    <Routes>
      <Route exact="/" index element={<Home/>}/>
      <Route exact="/wishlist" path="/wishlist" element={<Wishlist/>}/>
      <Route exact="/cart" path="/cart" element={<Cart/>}/>
      <Route exact="/contact" path="/contact" element={<Contact/>}/>
      
    </Routes>

    </>
  );
}

export default App;
