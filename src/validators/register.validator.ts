import * as Yup from 'yup';

const registerValidator = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(2)
    .matches(/([A-z]{2})\s([A-z]{2})/g, {
      excludeEmptyString: true,
      message: 'Full name required',
    })
    .trim(),

  email: Yup.string().required().email().trim(),
  password: Yup.string().required().min(8).max(16).trim(),
});

export default registerValidator;
