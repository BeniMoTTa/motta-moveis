import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
};
