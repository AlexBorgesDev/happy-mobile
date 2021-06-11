import getYupErrorPaths from '../utils/getYupErrorPaths';

import loginValidator from '../validators/login.validator';

const loginService = async (
  email: string,
  password: string,
  onInputErrors: (errors: string[]) => void,
) => {
  try {
    await loginValidator.validate({ email, password }, { abortEarly: false });
  } catch (error: any) {
    onInputErrors(getYupErrorPaths(error));
  }
};

export default loginService;
