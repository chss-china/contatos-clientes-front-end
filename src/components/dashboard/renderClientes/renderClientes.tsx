import React from "react";
import { useContext } from "react";
import { ClientContext } from "../../../providers/clientContext";
import { useEffect } from "react";
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

//aqui temos acesso ao id dos clients

export const ClientGetAll: React.FC<ClientGetAllProps> = ({ client }) => {
  // Defina um estado para guardar o client.id
  // const [clientIdState, setClientIdState] = useState<number | null>(null);
  const { selectedClientId, setSelectedClientId, setOpenModal } =
    useContext(ClientContext);
  console.log(selectedClientId);
  // Utilize o hook useEffect para atualizar o estado clientIdState no primeiro render
  return (
    <li>
      {/* O valor de client.id foi armazenado em clientIdState no primeiro render */}
      - {client.fullname} - {client.email}
      <button
        onClick={() => {
          setOpenModal(true);
          setSelectedClientId(client.id);
        }}
      >
        Abrir Modal
      </button>
      <button
        onClick={() => {
          setOpenModal(false);
          setSelectedClientId(client.id);
        }}
      >
        Fechar Modal e definir o Cliente Selecionado
      </button>
    </li>
  );
};
