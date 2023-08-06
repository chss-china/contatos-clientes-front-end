import { useContext, useState } from "react";
import ModalRegisterContacts from "../../../modais/modal.contactregister";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ContactContext } from "../../../../providers/contactscontext";
import { Button, ClientList, Title } from "../../styles.dashboard";
import { ContactGetAll } from "../../rendercontacts/rendercontacts";
import { ModalEditContact } from "../../../modais/modaleditcontacts";
import ModalEdit from "../../../modais/modal";

export const DashboardContacts = () => {
  const {
    setOpenModal,
    openModal,
    setGetContacts,
    getContacts,
    isAdmin,
    setIsAdmin,
  } = useContext(ContactContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchData = async () => await refresh();
  //   fetchData();
  // }, []);

  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        Cadastro de contatos de clientes disponíveis apenas para administradores
      </Button>
      <Button type="button" onClick={navigateLogin}>
        Voltar ao Login
      </Button>
      <Title>Pagina de Contatos dos clientes</Title>
      <ModalRegisterContacts myisOpen={openModal} />

      <ClientList>
        {Array.isArray(getContacts) &&
          getContacts.map((contact) => (
            <ContactGetAll key={contact.id} contact={contact} />
          ))}
      </ClientList>
    </>
  );
};
