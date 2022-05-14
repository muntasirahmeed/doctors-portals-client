import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Apointment from "./Components/Pages/Apointment/Apointment";
import Login from "./Components/Pages/Authentication/Login/Login";
import SignUp from "./Components/Pages/Authentication/SignUp/SignUp";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Home from "./Components/Pages/Home/Home";
import Reviews from "./Components/Pages/Reviews/Reviews";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Footers from "./Components/Shared/Footers/Footers";
import Navber from "./Components/Shared/Navber/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-base-100">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Apointment />
            </RequireAuth>
          }
        ></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
      <Footers></Footers>
      <ToastContainer/>
    </div>
  );
}

export default App;
