import { AuthLogin } from "../components/authLogin/authLogin";
import { AuthToken } from "../components/authToken/euthToken";
import Dashboard from "../components/dashboard/dasboard";
import LoginPage from "../pages/login/loginpage";
import RegisterPage from "../pages/register/registerpage";
import { DashboardContacts } from "../components/dashboard/dashboardContacts/dashbordadncontacts/dashboardcontacts";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLogin />}>
        <Route path="/" element={<LoginPage />} />
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

//       <Route element={<AuthLogin />}>>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="*" element={<LoginPage />} />
//       </Route>
//       <Route element={<AuthToken />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/dashboardcontacts" element={<DashboardContacts />} />
//       </Route>
//     </Routes> */
// }
