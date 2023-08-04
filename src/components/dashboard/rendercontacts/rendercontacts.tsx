import React from "react";
import { useContext } from "react";
import { ContactContext } from "../../../providers/contactscontext";
import {
  StyledButton,
  StyledDiv,
  StyledLi,
  StyledP,
} from "../dashboardContacts/renderClientes/styles";

export interface TlistContatos {
  //atualizei para lista de contatos que vai na função de registro que é a resposta do que nos retorna
  id: number;
  fullname: string;
  email: string;
  zipCode: string;
  city: string;
  street: string;
  state: string;
  country: string;
  telephone: string;
  admin?: boolean;
  createdAt: string;
  client: {
    id: number;
    fullname: string;
    email: string;
    telephone: string;
    admim?: boolean;
    createdAt: string;
  };
}
interface ContactGetAllProps {
  contact: TlistContatos;
}
export const ContactGetAll = ({ contact }: ContactGetAllProps) => {
  const {
    selectedClientId,
    setSelectedClientId,
    setOpenModal,
    isAdmin,
    setIsAdmin,
  } = useContext(ContactContext);
  console.log(selectedClientId);
  console.log(isAdmin);
  return (
    <StyledLi>
      <StyledDiv>
        <StyledP>Nome Completo: {contact.fullname}</StyledP> Email:{" "}
        <StyledP>{contact.email}</StyledP>
        <StyledP>Telefone:{contact.telephone}</StyledP>{" "}
        <StyledP> Data de cadastro do cliente:{contact.createdAt}</StyledP>
        <StyledP>Pais: {contact.country}</StyledP> Email:{" "}
        <StyledP>Estado:{contact.state}</StyledP>
        <StyledP>Cidade:{contact.city}</StyledP>
        <StyledP>Cep:{contact.zipCode}</StyledP>
        <StyledP>Se o usuario é adminitrador:{contact.admin}</StyledP>
        <StyledButton
          onClick={() => {
            //setOpenModal(true);
            setSelectedClientId(contact.id);
            setIsAdmin(contact.admin!);
          }}
        >
          Atualizar ou Excluir o Cliente
        </StyledButton>
      </StyledDiv>
    </StyledLi>
  );
};
