import * as Yup from "yup";

export const depSearchValidationSchema = Yup.object({
  name: Yup.string().min(2),
  description: Yup.string().min(2),
  head: Yup.string().min(2),
});
