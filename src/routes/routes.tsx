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
      {/* Rotas para autenticação */}
      <Route element={<AuthLogin />}>
        {/* Rota da página de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Rota da página de registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Rota padrão (caso não corresponda a nenhuma rota acima) */}
        <Route path="*" element={<LoginPage />} />
      </Route>

      {/* Rotas autenticadas */}
      <Route element={<AuthToken />}>
        {/* Rota da página do dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rota da página de contatos no dashboard */}
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
