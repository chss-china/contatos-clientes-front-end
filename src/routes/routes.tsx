import { AuthLogin } from "../components/authLogin/authLogin";
import { AuthToken } from "../components/authToken/euthToken";
import Dashboard from "../components/dashboard/dasboard";
import LoginPage from "../pages/login/loginpage";
import RegisterPage from "../pages/register/registerpage";
import { DashboardContacts } from "../components/dashboard/dashboardContacts/dashbordadncontacts/dashboardcontacts";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/funcionamento" element={<HomePage />} /> */}
      <Route element={<AuthLogin />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
      <Route element={<AuthToken />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardcontacts" element={<DashboardContacts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
