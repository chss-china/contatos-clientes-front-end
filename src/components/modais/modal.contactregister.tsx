import { useContext } from "react";
import { ContactContext } from "../../providers/contactscontext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IregisterForm } from "../../providers/contactscontext";
import { api } from "../../services/api";
import {
  CloseButton,
  ModalForm,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from "./styled";
interface TmyisOpen {
  myisOpen: boolean;
}
const registerContactSchema = yup.object().shape({
  fullname: yup.string().required("Nome completo é obrigatório."),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("E-mail é obrigatório."),
  telephone: yup.string().required("Telefone é obrigatório."),
  admin: yup.boolean(),
  password: yup.string().required("Senha é obrigatória."),
  zipCode: yup.string().required("CEP é obrigatório."),
  city: yup.string().required("Cidade é obrigatória."),
  street: yup.string().required("Endereço é obrigatório."),
  state: yup.string().required("Estado é obrigatório."),
  country: yup.string().required("País é obrigatório."),
});

export default function ModalRegisterContacts({ myisOpen }: TmyisOpen) {
  const { setOpenModal, openModal, functionRegisterContact } =
    useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerContactSchema),
  });

  const handleFormSubmit = (data: IregisterForm) => {
    functionRegisterContact(data); // Chamando a função functionRegisterContact com os dados do formulário
  };

  if (myisOpen) {
    return (
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>
            Contatos dos Cliente,Somente para administradores
          </ModalTitle>

          <CloseButton onClick={() => setOpenModal(false)}>&times;</CloseButton>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(handleFormSubmit)}>
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
            <button type="submit">Cadastrar Contato</button>
            <div>
              {/* <span
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
              </span> */}
            </div>
          </section>
        </ModalForm>
      </ModalWrapper>
    );
  }

  return null;
}
