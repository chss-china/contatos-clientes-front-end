import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
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
  fullname: Yup.string().trim().nullable(),
  email: Yup.string().trim().email().nullable(),
  telephone: Yup.string().trim().nullable(),
  admin: Yup.boolean().nullable(),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[A-Z])/,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .nullable(),
});

export default function ModalEdit({ isOpen }: TisOpen) {
  const {
    functionClientEdit,
    setOpenModal,
    functionClientRemove,
    selectedClientId,
  } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateClientSchema),
  });
  {
  }

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
