import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import { LoginContainer, LoginPageWrapper, RegisterLink } from "./styled";
const LoginPage = () => (
  <>
    <LoginPageWrapper>
      <LoginContainer>
        <h1>Faça o Login</h1>
        <LoginForm />
        <RegisterLink to="/register">Cadastre-se</RegisterLink>
      </LoginContainer>
    </LoginPageWrapper>
  </>
);
export default LoginPage;
