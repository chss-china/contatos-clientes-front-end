import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "react-hook-form";

interface IValueProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedContactId: number | null;
  setSelectedContactId: React.Dispatch<React.SetStateAction<number | null>>;
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

export const ContactProvider = ({ children }: iRegisterChildrenProps) => {
  const [getContacts, setGetContacts] = useState<TlistContatos[]>([]);
  const [postContacts, setPostContacts] = useState<TlistContatos>();
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );
  const [openModal, setOpenModal] = useState(false);
  const [contactRemove, setRemoveContact] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const functionRegisterContact = async (formData: IregisterForm) => {
    const tokenClient = localStorage.getItem("@TokenClient");
    const headers = {
      Authorization: `Bearer ${tokenClient}`,
    };

    try {
      const response = await api.post("/contacts", formData, {
        headers: headers,
      });
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
      } = response.data;

      console.log(id);
      console.log(fullname);
      console.log(email);

      const {
        id: clientId,
        fullname: clientFullname,
        email: clientEmail,
        telephone: clientTelephone,
        admin: clientAdmin,
        createdAt: clientCreatedAt,
      } = response.data.client;

      console.log(clientId);
      console.log(clientFullname);
      console.log(clientEmail);
      toast.success("Contato criado com sucesso");
      setPostContacts(response.data.client);
      console.log(response);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const refreshGet = () => {
    fetchClients();
  };
  const fetchClients = async () => {
    try {
      const response = await api.get("/contacts");
      setGetContacts(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    fetchClients();
    const intervalId = setInterval(fetchClients, 3000);
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

      if (response.status === 200) {
        toast.success("Cliente alterado com sucesso");
      } else {
        toast.error("Resposta inesperada do servidor");
      }
    } catch (error: any) {
      if (error.response) {
        toast(error.response.data.message);
      } else {
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };

  const functionContactRemove = async (id: number) => {
    try {
      const response = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenClient}`,
        },
      });

      if (selectedContactId === id) {
        setSelectedContactId(null);
      }

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

  return (
    <>
      <ContactContext.Provider
        value={{
          openModal,
          setOpenModal,
          isAdmin,
          setIsAdmin,
          functionContactRemove,
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
