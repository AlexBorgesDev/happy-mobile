import api from './api';

import loginValidator from '../validators/login.validator';
import getYupErrorPaths from '../utils/getYupErrorPaths';

import { LoginApiReturn } from '../@types/types';

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

  const { data: response } = await api.post('sessions', data);

  return response as LoginApiReturn;
};

export default loginService;
