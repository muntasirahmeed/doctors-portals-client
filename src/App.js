import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Apointment from "./Components/Pages/Apointment/Apointment";
import Login from "./Components/Pages/Authentication/Login/Login";
import SignUp from "./Components/Pages/Authentication/SignUp/SignUp";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Pages/Home/Home";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Footers from "./Components/Shared/Footers/Footers";
import Navber from "./Components/Shared/Navber/Navber";

function App() {
  return (
    <div className="bg-[#E5E5E5]">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Apointment />}></Route>
        <Route path="reviews" element={<Reviews/>}></Route>
        <Route path="contactus" element={<ContactUs/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
      </Routes>
      <Footers></Footers>
    </div>
  );
}

export default App;
