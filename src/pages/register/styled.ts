import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RegisterForm from "./../../components/loginForm/registerForm/registerForm";
export const RegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const RegisterContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
`;
export const CreateAccountLink = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: 20px;
  color: #3498db;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
    color: #1e6ec7; /* Altere a cor do hover conforme desejado */
  }
`;
