import * as Yup from 'yup';

const loginValidator = Yup.object().shape({
  email: Yup.string().required().email().trim(),
  password: Yup.string().required().min(8).max(16).trim(),
});

export default loginValidator;
