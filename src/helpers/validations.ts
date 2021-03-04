import * as yup from "yup";
import { IAttribute } from "../lib/attributes";

export const productSchema = yup.object().shape({
  cost: yup.number().moreThan(0).required(),
  price: yup.number().moreThan(0).required(),
  description: yup.string(),
  name: yup.string().required(),
  quantity: yup.number().required(),
  sku: yup.string().required(),
});

export const productAttributesCheck = async (
  attributes: IAttribute[] | null,
  values: {
    attributeRef: IAttribute["uid"];
    options: IAttribute["options"];
  }[]
) => {
  if (!attributes) return;
  const errors = attributes
    .map(({ uid, required, attributeName }) => {
      if (
        required &&
        !values.some(({ attributeRef }) => attributeRef === uid)
      ) {
        return {
          message: `${attributeName.name} is a required field`,
        };
      }
      return null;
    })
    .filter((node) => node);
  if (errors.length > 0) {
    throw errors[0];
  }
};

export const accountSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  phone: yup.string().required(),
  address: yup.string(),
  companyName: yup.string(),
  accountNumber: yup.string(),
  accountTitle: yup.string(),
  balance: yup.number().required(),
  description: yup.string(),
});

export const addEntrySchema = yup.object().shape({
  name: yup.string().required("Please Select a User"),
});

export const invoiceSchema = yup.object().shape({
  tax: yup.number().min(0).max(99),
});

export const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().required("Password must be 6 characters logn !"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const authenticateUser = () => {
  throw new Error(`Email and/or Password is not matched !`);
};

export const checkDuplication = () => {
  throw new Error(`A User with that Email or Phone Already Exists !`);
};
