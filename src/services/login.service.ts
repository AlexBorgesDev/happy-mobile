import getYupErrorPaths from '../utils/getYupErrorPaths';

import loginValidator from '../validators/login.validator';

type Data = {
  email: string;
  password: string;
};

type InputErrors = (errors: string[]) => void;

const loginService = async (data: Data, onInputErrors: InputErrors) => {
  try {
    await loginValidator.validate(data, { abortEarly: false });
  } catch (error: any) {
    onInputErrors(getYupErrorPaths(error));
    return;
  }
};

export default loginService;
