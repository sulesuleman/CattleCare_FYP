export const getInputClasses = (formik, fieldname) => {
  if (formik.touched[fieldname] && formik.errors[fieldname]) {
    return "border border-danger";
  }

  if (formik.touched[fieldname] && !formik.errors[fieldname]) {
    return "border border-primary";
  }

  return "";
};
