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
  selectedContactId: number | null;
  setSelectedContactId: React.Dispatch<React.SetStateAction<number | null>>;
  //refresh: () => Promise<void>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  getContacts: TlistContatos[];
  setGetContacts: React.Dispatch<React.SetStateAction<TlistContatos[]>>;
  functionRegisterContact: (data: IregisterForm) => void;
  functionContactEdit: (data: TupdateContact) => void;
  functionContactRemove: (id: number) => void;
  contactRemove: boolean;
  setRemoveContact: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ContactContext = createContext({} as IValueProps);

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
interface TupdateContact {
  fullname?: string | null | undefined;
  email?: string | null | undefined;
  telephone?: string | null | undefined;
  password?: string | null | undefined;
  zipCode?: string | null | undefined;
  city?: string | null | undefined;
  street?: string | null | undefined;
  state?: string | null | undefined;
  country?: string | null | undefined;
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
  // const [useLogin, setUserLogin] = useState({} as iLoginUser);
  // const [contactInfo, setContactInfo] = useState({} as infoClient[]); ///mudei o nome para contatos,
  // e o estate que vai função de regiester
  const [getContacts, setGetContacts] = useState<TlistContatos[]>([]);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );
  const [openModal, setOpenModal] = useState(false);
  const [contactRemove, setRemoveContact] = useState(false);
  // const [clientIdRegister, setClientIdRegister] = useState([]);
  // const [clientDataAuthentication, setClientDataAuthentication] = useState(
  //   {} as clientAuthentication
  // );

  const [isAdmin, setIsAdmin] = useState(false);
  // const refresh = async () => {
  //   try {
  //     const res = await api.get("/clients");
  //     console.log("to aqui 2 ");
  //     setClientsGet(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // console.log("to aqui 3");
  //const navigate = useNavigate();
  const functionRegisterContact = async (formData: IregisterForm) => {
    const tokenClient = localStorage.getItem("@TokenClient");
    const headers = {
      Authorization: `Bearer ${tokenClient}`,
    };

    try {
      const response = await api.post("/contacts", formData, {
        headers: headers,
      });

      console.log(response.data); // Aqui você pode tratar os dados retornados pela API após o cadastro

      // Se quiser acessar algum dado específico do retorno, pode fazer assim:
      const {
        id,
        fullname,
        email,
        zipCode,
        city,
        street,
        state,
        country,
        telephone,
        admin,
        createdAt,
        client,
      } = response.data;

      console.log(id);
      console.log(fullname);
      console.log(email);
      toast.success("Contato criado com sucesso");
      console.log(response);
      // ... e assim por diante, com os outros campos que foram retornados
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const refreshGet = () => {
    fetchClients();
  };
  const fetchClients = async () => {
    try {
      const response = await api.get("/contacts"); // Replace with your API endpoint
      setGetContacts(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    // Fetch clients initially when the component mounts
    fetchClients();
    // Fetch clients every 5 seconds using setInterval
    const intervalId = setInterval(fetchClients, 3000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  var tokenClient = localStorage.getItem("@TokenClient");
  const functionContactEdit = async (data: TupdateContact) => {
    try {
      const response = await api.patch(`/contacts/${selectedContactId}`, data, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      console.log("passei na response", response.data);

      /// console.log(response);

      if (response.status === 200) {
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
        console.log(error.message);
      }
    }
  };

  const functionContactRemove = async (id: number) => {
    try {
      // Fazer a requisição para remover o cliente do servidor através da API
      //  if (isAdmin || selectedClientId == clientDataAuthentication.id) {
      const response = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });
      // Verificar se o cliente removido é o mesmo que está selecionado
      if (selectedContactId === id) {
        setSelectedContactId(null);
      }

      // Atualizar a lista de clientes após a remoção
      // refresh();

      // Exemplo de mensagem de sucesso
      toast.success("Cliente removido com sucesso!");
    } catch (error: any) {
      // Lidar com erros de requisição ou exibição de mensagem de erro
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
  // const GetRefresh = async () => {
  //   try {
  //     const response = await api.get(`/clients/${clientId}`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <ContactContext.Provider
        value={{
          // functionRegisterContact,
          //  clientsGet,
          // functionClientEdit,
          openModal,
          setOpenModal,
          isAdmin,
          setIsAdmin,
          functionContactRemove,
          //  functionClientRemove,
          // refresh,
          selectedContactId,
          setSelectedContactId,
          setGetContacts,
          getContacts,
          functionRegisterContact,
          functionContactEdit,
          contactRemove,
          setRemoveContact,
        }}
      >
        {children}
      </ContactContext.Provider>
    </>
  );
};
