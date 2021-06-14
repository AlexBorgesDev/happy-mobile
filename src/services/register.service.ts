import api from './api';

import getYupErrorPaths from '../utils/getYupErrorPaths';
import registerValidator from '../validators/register.validator';

type Data = {
  name: string;
  email: string;
  password: string;
};

type InputErrors = (errors: string[]) => void;

const registerService = async (data: Data, onInputErrors: InputErrors) => {
  try {
    await registerValidator.validate(data, { abortEarly: false });
  } catch (error: any) {
    onInputErrors(getYupErrorPaths(error));
    return;
  }

  const { data: response } = await api.post('users', data);

  return response as { message: string };
};

export default registerService;
