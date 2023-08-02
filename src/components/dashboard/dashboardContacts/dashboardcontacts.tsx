import { useContext, useState } from "react";
import ModalRegisterContacts from "../../modais/modal.contact";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ContatoContext } from "../../../providers/contactscontext";

export const DashboardContacts = () => {
  const { setOpenModal, openModal, refresh } = useContext(ContatoContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => await refresh();
    fetchData();
  }, []);

  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }
  console.log();
  return (
    <>
      <h1>Pagina de Contatos dos clientes</h1>
      <ModalRegisterContacts myisOpen={openModal} />
      <button onClick={() => setOpenModal(true)}>
        Cadatrar os contatos do clientes
      </button>
    </>
  );
};
