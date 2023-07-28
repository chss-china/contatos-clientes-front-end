import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt from "jsonwebtoken";

interface IValueProps {
  functionRegister: (data: IregisterForm) => void;
  functionClientEdit: (data: TupdateClient) => void;
  clientsGet: Tlistclients[];
  functionLogin: (data: ILoginForm) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  functionClientRemove: (id: number) => void;
  selectedClientId: number | null;
  setSelectedClientId: React.Dispatch<React.SetStateAction<number | null>>;
  refresh: () => Promise<void>;
  //isLoading: boolean;

  // clientInfo: infoClient[];
  // setClientInfo: React.Dispatch<React.SetStateAction<[]>>;
}
//   useLogin: iLoginUser;
// }
export const ClientContext = createContext({} as IValueProps);

interface iRegisterChildrenProps {
  children: React.ReactNode;
}

interface IregisterForm {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean | null;
  password: string;
}

interface ILoginForm {
  email: string;
  password: string;
}
interface iLoginUser {
  token: string;
}
interface infoClient {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  password: string;
  createdAt: string;
}
interface TupdateClient {
  fullname?: string | null | undefined;
  email?: string | null | undefined;
  telephone?: string | null | undefined;
  admin?: boolean | null | undefined;
  password?: string | null | undefined;
}
export interface Tlistclients {
  id: number;
  fullname: string;
  email: string;
  telephone: string;
  admin?: boolean;
  createdAt: string;
}
export const ClientProvider = ({ children }: iRegisterChildrenProps) => {
  const navigate = useNavigate();
  const [useLogin, setUserLogin] = useState({} as iLoginUser);
  const [clientInfo, setClientInfo] = useState({} as infoClient[]);
  const [clientsGet, setClientsGet] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [clientRemove, setRemoveClient] = useState();
  const [clientIdRegister, setClientIdRegister] = useState([]);
  const [clientLoginId, setclientLoginId] = useState<null | undefined | string>(
    null
  );
  // const [isLoading, setIsLoading] = useState(false);
  const refresh = async () => {
    try {
      const res = await api.get("/clients");
      setClientsGet(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const functionRegister = async (data: IregisterForm) => {
    try {
      const response = await api.post("/clients", data);
      console.log(response.data);
      setClientInfo(response.data);
      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const functionLogin = async (data: ILoginForm) => {
    try {
      const response = await api.post("/login", data);
      console.log(response);
      navigate("/dashboard");
      let token = localStorage.setItem("@TokenClient", response.data.token);
      console.log(token);
      console.log(response.data.token);
      setUserLogin(response.data);
      console.log(response.data);
    } catch (error: any) {
      toast.error("Usuario não encontrado");
    }
  };

  useEffect(() => {
    // Função para fazer a requisição de listagem dos clientes
    const fetchClients = async () => {
      try {
        const response = await api.get("/clients"); // Substitua a URL pela sua API
        console.log(response);
        setClientsGet(response.data);
        setClientIdRegister(response.data.id);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClients(); // Chama a função para buscar os clientes quando o componente montar
  }, []);
  const tokenClient = localStorage.getItem("@TokenClient");
  console.log(tokenClient);

  const functionClientEdit = async (data: TupdateClient) => {
    try {
      const response = await api.patch(`/clients/${selectedClientId}`, data, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      refresh();
      console.log(response);

      if (response.status === 200) {
        toast.success("Client changed successfully");
      } else {
        toast.error("Unexpected response from the server");
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        toast(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };

  const functionClientRemove = async (id: number) => {
    try {
      // Fazer a requisição para remover o cliente do servidor através da API
      const response = await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      console.log(response);
      if (selectedClientId === id) {
        setSelectedClientId(null);
      }
      refresh();
    } catch (error) {
      // Lidar com erros de requisição ou exibição de mensagem de erro
      console.error(error);
    }
  };

  return (
    <>
      <ClientContext.Provider
        value={{
          functionRegister,
          functionLogin,
          clientsGet,
          functionClientEdit,
          openModal,
          setOpenModal,
          functionClientRemove,
          selectedClientId,
          setSelectedClientId,
          refresh,
          // isLoading,
        }}
      >
        {children}
      </ClientContext.Provider>
    </>
  );
};
