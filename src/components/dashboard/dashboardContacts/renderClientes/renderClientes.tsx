import React from "react";
import { useContext } from "react";
import { ClientContext } from "../../../../providers/clientContext";
import { StyledDiv, StyledLi, StyledP, StyledButton } from "./styles";
import { ContactContext } from "../../../../providers/contactscontext";
import { ModalEditContact } from "../../../modais/modaleditcontacts";
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
  const {
    selectedClientId,
    setSelectedClientId,
    setOpenModal,
    setIsAdmin,
    isAdmin,
  } = useContext(ClientContext);

  return (
    <StyledLi>
      <StyledDiv>
        <StyledP>Nome Completo: {client.fullname}</StyledP> Email:{" "}
        <StyledP>{client.email}</StyledP>
        <StyledP> Data de cadastro do cliente:{client.createdAt}</StyledP>
        <StyledButton
          onClick={() => {
            setOpenModal(true);
            setSelectedClientId(client.id);
            setIsAdmin(client.admin!);
          }}
        >
          Atualizar ou Excluir o Cliente
        </StyledButton>
      </StyledDiv>
    </StyledLi>
  );
};
