import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  max-width: 400px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const ModalForm = styled.form`
  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  p {
    color: red;
    margin-top: 5px;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    button[type="submit"] {
      background-color: #4caf50;
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
    }

    div {
      span {
        color: #f44336;
        cursor: pointer;
      }
    }
  }
`;
