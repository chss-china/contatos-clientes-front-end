import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ClientGetAll } from "./renderClientes/renderClientes";
import { useEffect } from "react";
import ModalEdit from "../modais/modal";
import { useNavigate } from "react-router-dom";
import { Button, ClientList, PageWrapper, Title } from "./styles.dashboard";
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
  const navigate = useNavigate();
  const { clientsGet, openModal, setOpenModal, refresh } =
    useContext(ClientContext);
  useEffect(() => {
    async () => await refresh();
  }, []);

  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }
  return (
    <PageWrapper>
      <Button type="button" onClick={navigateLogin}>
        Sair
      </Button>
      <Title>Pagina de Clientes</Title>
      <ClientList>
        {clientsGet.map((client) => (
          <ClientGetAll key={client.id} client={client} />
        ))}
      </ClientList>
      <ModalEdit isOpen={openModal} />
    </PageWrapper>
  );
};

export default Dashboard;
