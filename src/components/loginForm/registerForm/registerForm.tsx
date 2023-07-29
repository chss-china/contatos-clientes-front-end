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
  // .test("is-admin-email", "o admin tem um e-mail unico", function (value) {
  //   // If admin field is not true, skip validation
  //   if (value !== true) {
  //     return true;
  //   }

  //   // Get the email value from the form data
  //   const email = this.resolve(yup.ref("email"));

  //   // Check if the email is 'chss.bolsa99@gmail.com'
  //   return email === "chss.bolsa99@gmail.com";
  // }),
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
      <Input
        label="Admin"
        errors={errors.admin?.message}
        register={register("admin")}
        type="admin"
      />
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
