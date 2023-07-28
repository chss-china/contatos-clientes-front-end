import react from "react";
import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ClientGetAll } from "./renderClientes/renderClientes";
import { useState } from "react";
import { useEffect } from "react";
import ModalEdit from "../modais/modal";
//import ModalEdit from "../modais/modal";
interface Tlistclients {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  createdAt: string;
}
const Dashboard: React.FC = () => {
  const { clientsGet, openModal, setOpenModal, refresh } =
    useContext(ClientContext);
  useEffect(() => {
    async () => await refresh();
  }, []);
  return (
    <>
      {/* {isLoading ? (
          <div>Carregando...</div>
        ) : ( */}
      <>
        <h1>Dashboard</h1>
        <ul>
          {clientsGet.map((client) => (
            <ClientGetAll key={client.id} client={client} />
          ))}
        </ul>

        {/* <button onClick={() => setOpenModal(true)}>Abir o Modal</button>
          <button onClick={() => setOpenModal(false)}>Fechar Modal</button> */}
        <ModalEdit isOpen={openModal} />
      </>
      {/* )} */}
    </>
  );
};
export default Dashboard;
