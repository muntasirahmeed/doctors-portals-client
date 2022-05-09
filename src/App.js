import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Apointment from "./Components/Pages/Apointment/Apointment";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Navber from "./Components/Shared/Navber/Navber";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apointment" element={<Apointment />}></Route>
        <Route path="reviews" element={<Reviews/>}></Route>
        <Route path="contactus" element={<ContactUs/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
