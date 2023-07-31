import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Input } from "../../inputs/inputs";
import { ClientContext } from "../../../providers/clientContext";
import { FormContainer, SubmitButton } from "./styled.form";
const formSchemaRegister = yup.object().shape({
  fullname: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  telephone: yup.string().required("Telefone obrigatório"),
  admin: yup.boolean().default(false).nullable(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=^.{6,255}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
      "Senha deve conter no mínimo 6 caracteres e pelo menos uma letra maiúscula"
    ),
});
interface IregisterLoginForm {
  fullname: string;
  email: string;
  telephone: string;
  admin: boolean | null;
  password: string;
}
const RegisterForm = () => {
  const { functionRegister } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IregisterLoginForm>({
    resolver: yupResolver(formSchemaRegister),
  });
  const { isAdmin, setIsAdmin } = useContext(ClientContext);
  console.log(isAdmin);

  const handleAdminInputChange = (event: any) => {
    setIsAdmin(event.target.checked);
  };
  console.log(isAdmin);
  return (
    <FormContainer onSubmit={handleSubmit(functionRegister)}>
      <Input
        label="Nome Completo"
        errors={errors.fullname?.message}
        register={register("fullname")}
        type="text"
      />
      <Input
        label="Email"
        errors={errors.email?.message}
        register={register("email")}
        type="email"
      />
      <Input
        label="Senha"
        errors={errors.password?.message}
        register={register("password")}
        type="password"
      />
      <label>Voce é admin ? clique no seletor</label>
      <input
        type="checkbox"
        checked={isAdmin}
        {...register("admin")}
        onChange={handleAdminInputChange}
      />
      <p>{Boolean(isAdmin)}</p>
      {errors.admin && <p>{errors.admin.message}</p>}
      <Input
        label="Telefone"
        errors={errors.telephone?.message}
        register={register("telephone")}
        type="telephone"
      />
      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </FormContainer>
  );
};

export default RegisterForm;
