import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
import { useState } from "react";
// import { TupdateClient } from "./zodvalidator";
// import { schemaUpdate } from "./zodvalidator";
// import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CloseButton,
  ModalForm,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./styled";
interface TisOpen {
  isOpen: boolean;
}
const updateClientSchema = Yup.object().shape({
  fullname: Yup.string().trim().nullable(), // Campo opcional
  email: Yup.string().trim().email().nullable(), // Campo opcional
  telephone: Yup.string().trim().nullable(), // Campo opcional
  admin: Yup.boolean().nullable(), // Campo opcional
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[A-Z])/,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .nullable(), // Campo opcional
});

export default function ModalEdit({ isOpen }: TisOpen) {
  interface TupdateClient {
    fullname?: string;
    email?: string;
    telephone?: string;
    admin?: boolean;
    password?: string;
  }
  const handleClientSelect = (clientId: number) => {
    setSelectedClientId(clientId);
  };

  const {
    functionClientEdit,
    setOpenModal,
    functionClientRemove,
    selectedClientId,
    setSelectedClientId,
  } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateClientSchema),
  });
  {
    console.log(selectedClientId);
  }
  const { isAdmin, setIsAdmin } = useContext(ClientContext);
  console.log(isAdmin);

  const handleAdminInputChange = (event: any) => {
    setIsAdmin(event.target.checked);
  };
  console.log(isAdmin);

  if (isOpen) {
    return (
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Clientes</ModalTitle>
          <CloseButton onClick={() => setOpenModal(false)}>&times;</CloseButton>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(functionClientEdit)}>
          <label>Nome Completo</label>
          <input type="text" {...register("fullname")} />
          {errors.fullname && <p>{errors.fullname.message}</p>}

          <label>Email</label>
          <input type="text" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Telefone</label>
          <input type="text" {...register("telephone")} />
          {errors.telephone && <p>{errors.telephone.message}</p>}

          <label>Senha</label>
          <input type="text" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}

          <section>
            <button type="submit">Salvar Alterações</button>
            <div>
              <span
                onClick={() => {
                  if (selectedClientId !== null) {
                    functionClientRemove(selectedClientId);
                  } else {
                    // Mostrar mensagem de erro ou alerta caso não haja cliente selecionado
                    toast.error("Nenhum cliente selecionado.");
                  }
                }}
              >
                Excluir Cliente
              </span>
            </div>
          </section>
        </ModalForm>
      </ModalWrapper>
    );
  }

  return null;
}
