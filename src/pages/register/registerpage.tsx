import RegisterForm from "../../components/loginForm/registerForm/registerForm";
import { Link } from "react-router-dom";
import {
  CreateAccountLink,
  RegisterContainer,
  RegisterPageWrapper,
} from "./styled";
const RegisterPage = () => (
  <RegisterPageWrapper>
    <RegisterContainer>
      <h1>Cadastrar</h1>
      <RegisterForm />
    </RegisterContainer>
    <CreateAccountLink to="/">
      Já possui uma conta? Faça o Login
    </CreateAccountLink>
  </RegisterPageWrapper>
);
export default RegisterPage;
