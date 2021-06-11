import { ValidationError } from 'yup';

export default (error: ValidationError) => {
  const errs: string[] = [];
  error.inner.map(err => err.path && errs.push(err.path));

  return [...new Set(errs)];
};
