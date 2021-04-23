import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large"], "Size is required"),
    pineapple: yup.boolean(),
    concrete: yup.boolean(),
    drywall: yup.boolean(),
    acid: yup.boolean(),
    special: yup
        .string(),
});