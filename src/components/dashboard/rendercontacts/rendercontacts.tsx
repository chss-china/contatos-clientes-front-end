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

export const ContactGetAll: React.FC<ContactGetAllProps> = (props) => {
  const { contact } = props;

  const { setSelectedContactId, setIsAdmin, setRemoveContact } =
    useContext(ContactContext);

  return (
    <>
      <StyledLi>
        <StyledDiv>
          <StyledP>Nome Completo: {contact.fullname}</StyledP>
          <StyledP>{contact.email}</StyledP>
          <StyledP>Telefone: {contact.telephone}</StyledP>
          <StyledP>Data de cadastro do cliente: {contact.createdAt}</StyledP>
          {contact.country && <StyledP>Pais: {contact.country}</StyledP>}
          {contact.state && <StyledP>Estado: {contact.state}</StyledP>}
          {contact.city && <StyledP>Cidade: {contact.city}</StyledP>}
          {contact.zipCode && <StyledP>Cep: {contact.zipCode}</StyledP>}
          <StyledButton
            onClick={() => {
              setRemoveContact(true);
              setSelectedContactId(contact.id);
              setIsAdmin(contact.admin!);
            }}
          >
            Atualizar ou Excluir o Cliente somente para administradores
          </StyledButton>
        </StyledDiv>
      </StyledLi>
    </>
  );
};
