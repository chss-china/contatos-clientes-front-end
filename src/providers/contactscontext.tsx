import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "react-hook-form";

interface IValueProps {
  //functionRegisterContact: (data: IregisterForm);
  ///functionClientEdit: (data: TupdateClient) => void;
  // clientsGet: Tlistclients[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  // functionClientRemove: (id: number) => void;
  selectedClientId: number | null;
  setSelectedClientId: React.Dispatch<React.SetStateAction<number | null>>;
  refresh: () => Promise<void>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}
console.log("to aqui");
export const ContatoContext = createContext({} as IValueProps);

interface iRegisterChildrenProps {
  children: React.ReactNode;
}
interface Ttoken {
  tokenClient: string;
}
//ja mudei interface para  de contatos na função de registro
export interface IregisterForm {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean | undefined;
  password: string;
  zipCode: string;
  city: string;
  street: string;
  state: string;
  country: string;
}

interface ILoginForm {
  email: string;
  password: string;
}
interface iLoginUser {
  token: string;
}
interface infoClient {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean;
  password: string;
  zipCode: string;
  city: string;
  street: string;
  state: string;
  country: string;
}
interface TupdateClient {
  fullname?: string | null | undefined;
  email?: string | null | undefined;
  telephone?: string | null | undefined;
}
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

interface clientAuthentication {
  id: number;
  fullname: string;
  email: string;
}
export const ContactProvider = ({ children }: iRegisterChildrenProps) => {
  const [useLogin, setUserLogin] = useState({} as iLoginUser);
  const [contactInfo, setContactInfo] = useState({} as infoClient[]); ///mudei o nome para contatos,
  // e o estate que vai função de regiester
  const [clientsGet, setClientsGet] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [clientRemove, setRemoveClient] = useState();
  const [clientIdRegister, setClientIdRegister] = useState([]);
  const [clientDataAuthentication, setClientDataAuthentication] = useState(
    {} as clientAuthentication
  );

  const [isAdmin, setIsAdmin] = useState(false);
  const refresh = async () => {
    try {
      const res = await api.get("/clients");
      console.log("to aqui 2 ");
      setClientsGet(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("to aqui 3");
  const navigate = useNavigate();
  const tokenClient = localStorage.getItem("@TokenClient");
  const functionRegisterContact = async (data: IregisterForm) => {
    console.log(" to aqui na função de cadasrar contato");
    try {
      console.log("enttrei no try daf unção de cadasrar contato");
      const response = await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      //setClientInfo(response.data);
      console.log("cheguei na response");
      console.log(response);
      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      console.log("talvez tenha caido no catch");
      console.log(error);
      toast.error(error.response.data);
    }
  };

  console.log("estou aqui");
  // const refreshGet = () => {

  //   fetchClients();
  // };
  // const fetchClients = async () => {
  //   try {
  //     const response = await api.get("/clients"); // Substitua a URL pela sua API
  //     setClientsGet(response.data);
  //     setClientIdRegister(response.data.id);
  //     refresh();
  //     refreshGet();
  //   } catch (error) {
  //     console.error("Erro ao buscar clientes:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Chama a função para buscar os clientes ao fazer login
  //   fetchClients();
  // }, []);

  // // Obtém o ID do cliente autenticado a partir do token
  // //const authenticatedClientId = getAuthenticatedClientId(tokenClient);
  // //isAdmin || selectedClientId === authenticatedClientId
  // const functionClientEdit = async (data: TupdateClient) => {
  //   console.log("cheguei");
  //   try {
  //     const response = await api.patch(`/clients/${selectedClientId}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${tokenClient}`,
  //       },
  //     });
  //     console.log("passei na response", response);
  //     refresh();

  //     console.log(response);

  //     if (response.status === 200) {
  //       console.log("estou no erro");
  //       toast.success("Cliente alterado com sucesso");
  //     } else {
  //       toast.error("Resposta inesperada do servidor");
  //     }
  //   } catch (error: any) {
  //     if (error.response) {
  //       console.log(error.response.status);
  //       console.log("cai no catch do if");
  //       toast(error.response.data.message);
  //     } else {
  //       toast.error(error.message);
  //       console.log("cai no else do catch");
  //       console.log(error.message);
  //     }
  //   }
  // };

  // const functionClientRemove = async (id: number) => {
  //   try {
  //     // Fazer a requisição para remover o cliente do servidor através da API
  //     //  if (isAdmin || selectedClientId == clientDataAuthentication.id) {
  //     const response = await api.delete(`/clients/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${tokenClient}`,
  //       },
  //     });
  //     console.log(response);
  //     // Verificar se o cliente removido é o mesmo que está selecionado
  //     if (selectedClientId === id) {
  //       setSelectedClientId(null);
  //     }

  //     // Atualizar a lista de clientes após a remoção
  //     refresh();

  //     // Exemplo de mensagem de sucesso
  //     toast.success("Cliente removido com sucesso!");
  //   } catch (error: any) {
  //     // Lidar com erros de requisição ou exibição de mensagem de erro
  //     if (error.response) {
  //       console.log("Erro na requisição:", error.response.data);
  //       toast.error(error.response.data.message);
  //     } else if (error.request) {
  //       console.log(
  //         "Erro na requisição (sem resposta do servidor):",
  //         error.request
  //       );
  //     } else {
  //       console.log("Erro:", error.message);
  //     }
  //   }
  // };
  // ja coloquei o contexto no provider de contatos
  return (
    <>
      <ContatoContext.Provider
        value={{
          // functionRegisterContact,
          // clientsGet,
          // functionClientEdit,
          openModal,
          setOpenModal,
          //  functionClientRemove,
          selectedClientId,
          setSelectedClientId,
          refresh,
          isAdmin,
          setIsAdmin,
        }}
      >
        {children}
      </ContatoContext.Provider>
    </>
  );
};
