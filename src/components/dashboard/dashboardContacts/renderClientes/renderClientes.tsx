import React from "react";
import { useContext } from "react";
import { ClientContext } from "../../../../providers/clientContext";
import { StyledDiv, StyledLi, StyledP, StyledButton } from "./styles";
interface Tlistclients {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  createdAt: string;
}

interface ClientGetAllProps {
  client: Tlistclients;
}

export const ClientGetAll: React.FC<ClientGetAllProps> = ({ client }) => {
  const { selectedClientId, setSelectedClientId, setOpenModal } =
    useContext(ClientContext);
  console.log(selectedClientId);

  return (
    <StyledLi>
      <StyledDiv>
        <StyledP>Nome Completo: {client.fullname}</StyledP> Email:{" "}
        <StyledP>{client.email}</StyledP>
        <StyledP>Telefone:{client.telephone}</StyledP>{" "}
        <StyledP> Data de cadastro do cliente:{client.createdAt}</StyledP>
        <StyledP>Nome Completo: {client.fullname}</StyledP> Email:{" "}
        <StyledP>{client.email}</StyledP>
        <StyledButton
          onClick={() => {
            setOpenModal(true);
            setSelectedClientId(client.id);
          }}
        >
          Atualizar ou Excluir o Cliente
        </StyledButton>
      </StyledDiv>
    </StyledLi>
  );
};
