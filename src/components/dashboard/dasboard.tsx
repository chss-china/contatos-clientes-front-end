import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { ClientGetAll } from "./dashboardContacts/renderClientes/renderClientes";
import { useEffect } from "react";
import ModalEdit from "../modais/modal";
import { useNavigate } from "react-router-dom";
import { Button, ClientList, PageWrapper, Title } from "./styles.dashboard";
import { Link } from "react-router-dom";
const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { clientsGet, openModal, GetRefresh } = useContext(ClientContext);
  useEffect(() => {
    GetRefresh();
  }, []);
  function navigateLogin() {
    localStorage.getItem("@TokenClient");
    localStorage.removeItem("@TokenClient");
    navigate("/");
  }
  return (
    <PageWrapper>
      <Link to="/dashboardcontacts">Mais informações do cliente</Link>
      <Button type="button" onClick={navigateLogin}>
        Sair
      </Button>
      <Title>Pagina de Clientes</Title>
      <h2>
        Administradores podem modificar qualquer cliente, exceto outros
        administradores, enquanto um usuário logado somente altera suas próprias
        informações.
      </h2>
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
