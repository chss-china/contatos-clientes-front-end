import { UseFormRegisterReturn } from "react-hook-form";

interface IpropsInput {
  register: UseFormRegisterReturn<string>;
  errors?: any;
  label: string;
  type: string;
}
export const Input = ({ register, errors, label, type }: IpropsInput) => {
  return (
    <fieldset>
      <label htmlFor="">{label}</label>
      <input type={type} {...register} />
      <p>{errors}</p>
    </fieldset>
  );
};
