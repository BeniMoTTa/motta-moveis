import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Annoucement from "../pages/announcement/Annoucement";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/announcement" element={<Annoucement />} />
    </Routes>
  );
};
