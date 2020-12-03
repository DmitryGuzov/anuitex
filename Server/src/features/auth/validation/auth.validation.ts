import { object, string } from "yup";

export const AuthValidation = object().shape({
  email: string().required().email(),
  password: string().required(),
});
