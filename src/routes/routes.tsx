import Dashboard from "../components/dashboard/dasboard";
import LoginPage from "../pages/login/loginpage";
import RegisterPage from "../pages/register/registerpage";
import { Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default Router;
