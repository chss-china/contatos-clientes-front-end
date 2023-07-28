import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ClientContext } from "../../providers/clientContext";
// import { TupdateClient } from "./zodvalidator";
// import { schemaUpdate } from "./zodvalidator";
// import { zodResolver } from "@hookform/resolvers/zod";
interface TisOpen {
  isOpen: boolean;
}
const updateClientSchema = Yup.object().shape({
  fullname: Yup.string()
    .trim()
    .min(2, "O nome deve conter pelo menos 2 caracteres")
    .max(100, "O nome deve conter no máximo 100 caracteres")
    .nullable(), // Campo opcional
  email: Yup.string().trim().email("O email deve ser válido").nullable(), // Campo opcional
  telephone: Yup.string()
    .trim()
    .min(8, "O telefone deve conter pelo menos 8 caracteres")
    .max(20, "O telefone deve conter no máximo 20 caracteres")
    .nullable(), // Campo opcional
  admin: Yup.boolean().nullable(), // Campo opcional
  password: Yup.string()
    .trim()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .max(100, "A senha deve conter no máximo 100 caracteres")
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
  if (isOpen) {
    return (
      <div>
        <div>
          <h1>Clientes</h1>
          <span onClick={() => setOpenModal(false)}>X</span>
        </div>

        <form onSubmit={handleSubmit(functionClientEdit)}>
          <label>Nome Completo</label>
          <input type="text" {...register("fullname")} />
          {errors.fullname && <p>{errors.fullname.message}</p>}

          <label>Email</label>
          <input type="text" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>Telefone</label>
          <input type="text" {...register("telephone")} />
          {errors.telephone && <p>{errors.telephone.message}</p>}

          <label>Admin</label>
          <input type="text" {...register("admin")} />
          {errors.admin && <p>{errors.admin.message}</p>}

          <label>Password</label>
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
                    console.error("Nenhum cliente selecionado.");
                  }
                }}
              >
                Excluir
              </span>
            </div>
          </section>
        </form>
      </div>
    );
  }
  return null;
}
