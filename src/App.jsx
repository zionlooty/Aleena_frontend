import {BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/homepage"
import Productspage from "./pages/productspage"
import Signup from "./pages/signuppage"
import Loginpage from "./pages/loginpage"
import Navbar from "./components/nav"
import Addtocartpage from "./pages/addtocartpage"
import Aboutuspage from "./pages/aboutuspage"
import Productpage from "./pages/productpage"
import Contactuspage from "./pages/contactuspage"


function App() {
  

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    {/* <Route path="/products" element={<Productpage/>}/> */}
    <Route path="/products"  element={<Productspage />}/>
    <Route path="/signup"  element={<Signup />}/>
    <Route path="/login"  element={<Loginpage />}/>
    <Route path="/addtocart"  element={<Addtocartpage />}/>
    <Route path="/aboutus"  element={<Aboutuspage />}/>
    <Route path="/contactus"  element={<Contactuspage />}/>
   </Routes> 
   </BrowserRouter>
  )
}

export default App
