import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
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
import { ContactContext } from "../../providers/contactscontext";

const registerContactSchema = yup.object().shape({
  fullname: yup.string().nullable().optional(),
  email: yup.string().email("E-mail inválido.").nullable().optional(),
  telephone: yup.string().nullable().optional(),
  admin: yup.boolean().nullable().optional(),
  password: yup.string().nullable().optional(),
  zipCode: yup.string().nullable().optional(),
  city: yup.string().nullable().optional(),
  street: yup.string().nullable().optional(),
  state: yup.string().nullable().optional(),
  country: yup.string().nullable().optional(),
});
interface TmyisOpen {
  IsOpen: boolean;
}
export const ModalEditContact: React.FC<TmyisOpen> = ({ IsOpen }) => {
  const {
    functionContactEdit,
    functionContactRemove,
    setRemoveContact,
    selectedContactId,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerContactSchema),
  });
  {
  }

  const handleUpdateAll = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  if (IsOpen) {
    return (
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Contatos dos Clientes</ModalTitle>
          <CloseButton onClick={() => setRemoveContact(false)}>
            &times;
          </CloseButton>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(functionContactEdit)}>
          <label>Nome Completo</label>
          <input type="text" {...register("fullname")} />
          {errors.fullname && <p>{errors.fullname.message}</p>}

          <label>Email</label>
          <input type="text" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Senha</label>
          <input type="text" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}

          <label>Cep</label>
          <input type="text" {...register("zipCode")} />
          {errors.zipCode && <p>{errors.zipCode.message}</p>}

          <label>Cidade</label>
          <input type="text" {...register("city")} />
          {errors.city && <p>{errors.city.message}</p>}

          <label>Endereço</label>
          <input type="text" {...register("street")} />
          {errors.street && <p>{errors.street.message}</p>}

          <label>Estado</label>
          <input type="text" {...register("state")} />
          {errors.state && <p>{errors.state.message}</p>}

          <label>Pais</label>
          <input type="text" {...register("country")} />
          {errors.country && <p>{errors.country.message}</p>}

          <label>Telefone</label>
          <input type="text" {...register("telephone")} />
          {errors.telephone && <p>{errors.telephone.message}</p>}

          <section>
            <button onClick={() => handleUpdateAll()} type="submit">
              Salvar Alterações
            </button>
            <div>
              <span
                onClick={() => {
                  if (selectedContactId !== null) {
                    functionContactRemove(selectedContactId);
                  } else {
                    toast.error("Nenhum contato selecionado.");
                  }
                }}
              >
                Excluir Contato
              </span>
            </div>
          </section>
        </ModalForm>
      </ModalWrapper>
    );
  }
  return null;
};
