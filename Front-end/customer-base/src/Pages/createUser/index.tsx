import { FormStyle, Input } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const CreateUser = () => {
  const Schema = yup.object().shape({
    fullName: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio!!").email(),
    phone: yup.string().required(),
  });
  export default Schema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  return (
    <FormStyle>
      <h1>Criação de client</h1>
      <form>
        <label>Nome completo</label>
        <Input placeholder="fullName" {...register(`fullName`)} />
        <label>Email</label>
        <Input placeholder="email" {...register(`email`)} />
        <label>Telefone</label>
        <Input placeholder="phone" {...register(`phone`)} />
      </form>
    </FormStyle>
  );
};
