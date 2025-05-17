import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Homepage from "./pages/homepage"
import Productspage from "./pages/productspage"
import Signup from "./pages/signuppage"
import Loginpage from "./pages/loginpage"
import Navbar from "./components/nav"
import Addtocartpage from "./pages/addtocartpage"
import Aboutuspage from "./pages/aboutuspage"
import Contactuspage from "./pages/contactuspage"
import ViewPage from "./pages/view"
import ProfilePage from "./pages/profilepage"


const ProtectedRoute = ({children})=>{
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to={"/"} replace />
}

const LoginAuth = ({children})=>{
  const token = localStorage.getItem("token")
  return !token ? children : <Navigate to={"/"} replace />
}


function App() {
  

  return (
   <BrowserRouter>
   <Navbar/>

    <Routes>
      
        <Route path="/login"  element={
          <LoginAuth>
            <Loginpage />
          </LoginAuth>
          }/>
    
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products"  element={<Productspage />}/>
      <Route path="/signup"  element={<Signup />}/>
      <Route path="/login"  element={<Loginpage />}/>
      <Route path="/aboutus"  element={<Aboutuspage />}/>
      <Route path="/contactus"  element={<Contactuspage />}/>
      <Route path="/view/:id"  element={<ViewPage />}/>
      <Route path="/cart"  element={<Addtocartpage />}/>
      <Route path="/profile"  element={<ProfilePage />}/>
    </Routes> 

  
   </BrowserRouter>
  )
}

export default App
