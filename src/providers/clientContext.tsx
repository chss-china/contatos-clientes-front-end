import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  GetRefresh: () => void;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  const [clientIdRegister, setClientIdRegister] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
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
      let token = localStorage.setItem("@TokenClient", response.data.token);
      setUserLogin(response.data);
      const idSession = localStorage.setItem(
        "@clientId",
        response.data.client.id
      );
      fetchClients();
      console.log(response.data.client);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error("Usuario não encontrado");
    }
  };

  const fetchClients = async () => {
    try {
      const response = await api.get("/clients");
      setClientsGet(response.data);
      setClientIdRegister(response.data.id);
      GetRefresh();
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const tokenClient = localStorage.getItem("@TokenClient");
  const functionClientEdit = async (data: TupdateClient) => {
    console.log("cheguei");
    try {
      const response = await api.patch(`/clients/${selectedClientId}`, data, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      console.log("passei na response", response);
      GetRefresh();

      console.log(response);

      if (response.status === 200) {
        console.log("estou no erro");
        toast.success("Cliente alterado com sucesso");
      } else {
        toast.error("Resposta inesperada do servidor");
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        console.log("cai no catch do if");
        toast(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log("cai no else do catch");
        console.log(error.message);
      }
    }
  };

  const functionClientRemove = async (id: number) => {
    try {
      const response = await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      console.log(response);

      if (selectedClientId === id) {
        setSelectedClientId(null);
      }

      GetRefresh();
      toast.success("Cliente removido com sucesso!");
    } catch (error: any) {
      if (error.response) {
        console.log("Erro na requisição:", error.response.data);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(
          "Erro na requisição (sem resposta do servidor):",
          error.request
        );
      } else {
        console.log("Erro:", error.message);
      }
    }
  };
  const clientId = localStorage.getItem("@UserId");
  const GetRefresh = async () => {
    try {
      const response = await api.get(`/clients/${clientId}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
          GetRefresh,
          isAdmin,
          setIsAdmin,
        }}
      >
        {children}
      </ClientContext.Provider>
    </>
  );
};
