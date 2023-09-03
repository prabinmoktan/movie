import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    name: Yup.string()
        .min(6, "at least 6 words is required")
        .max(30)
        .required("name is required"),

    email: Yup.string()
        .email("must be valid email")

        .required("Email is required"),

    password: Yup.string()
    .min(6, "at least 6 alphabets required").max(15),

    confirmPassword : Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')

})






