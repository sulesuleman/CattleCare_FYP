import * as Yup from "yup";

const Email = Yup.string()
  .email("Wrong email format")
  .min(3, "Minimum 3 symbols")
  .max(50, "Maximum 50 symbols")
  .required("Email is a required field");

const Password = Yup.string()
  .min(8, "Minimum 8 symbols")
  .required("Password is a required field");

export const SignupSchema = Yup.object().shape({
  email: Email,
  password: Password,
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Confirm password must match with new password"
    )
    .required("This is a required field"),
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .required("Name is a required field"),
  phoneNumber: Yup.string()
    .min(11, "Minimum 11 symbols")
    .required("Phone number is a required field"),
  address: Yup.string()
    .min(5, "Minimum 5 symbols")
    .max(300, "Maximum 300 symbols")
    .required("Address is a required field"),
});

export const addAnimalSchema = Yup.object().shape({
  weight: Yup.string().required("Weight is a required field"),
  age: Yup.string().required("Age is a required field"),
  breedType: Yup.string().required("Breed type is a required field"),
  cattleType: Yup.string().required("Cattle type is a required field"),
  sex: Yup.string().required("Sex is a required field"),
  price: Yup.string().required("Price is a required field"),
  anticipationDate: Yup.string().required(
    "Anticipation Date is a required field"
  ),
  childCount: Yup.string().required("child count is a required field"),
});

export const addMedicalRecordSchema = Yup.object().shape({
  vaccinationType: Yup.string().required(
    "Vaccination type is a required field"
  ),
  vaccinationDate: Yup.string().required(
    "Vaccination Date is a required field"
  ),
  vaccinationPeriod: Yup.string().required(
    "Vaccination Period is a required field"
  ),
  diseaseType: Yup.string().required("Disease Type is a required field"),
  diseaseDate: Yup.string().required("Disease Date is a required field"),
  recoverStatus: Yup.string().required("Recover status is a required field"),
});

export const LoginSchema = Yup.object().shape({
  email: Email,
  password: Password,
});

export const addFeedSchema = Yup.object().shape({
  feedName: Yup.string().required("Feed name is a required field"),
  feedType: Yup.string().required("Feed Type is a required field"),
  feedBrand: Yup.string().required("Feed Brand is a required field"),
  quantity: Yup.number().required("Quantity is a required field"),
  price: Yup.number().required("Price is a required field"),
  date: Yup.date().required("Date is a required field"),
});
