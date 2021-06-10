import dark, { darkPaper } from './dark';
import light, { lightPaper } from './light';

class Theme {
  get = (scheme?: 'light' | 'dark') => (scheme === 'dark' ? dark : light);

  getPaper = (scheme?: 'light' | 'dark') =>
    scheme === 'dark' ? darkPaper : lightPaper;
}

export default new Theme();
