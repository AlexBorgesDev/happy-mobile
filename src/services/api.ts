import axios from 'axios';

import apiConfigs from '../configs/api.configs';

const api = axios.create({ baseURL: apiConfigs.baseUrl });

export default api;
