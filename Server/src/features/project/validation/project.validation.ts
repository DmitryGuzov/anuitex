import { object, string, number, array } from 'yup';

export const ProjectValidation = object().shape({
  title: string().required(),
  description: string().required(),
  features: array().of(
    object().shape({
      lvl: number().required(),
      title: string().required(),
      estimate: string().required(),
    }),
  ),
  estimate: number().required(),
});
