import { object, string, number, array } from "yup";

export const ProjectValidation = object().shape({
  title: string().required(),
  description: string().required(),
  features: array().of(
    object().shape({
      lvl: number().required(),
      title: string().required(),
      leadTime: string()
    })
  ),
  rate: number().required(),
});