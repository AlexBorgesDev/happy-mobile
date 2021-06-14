import api from './api';

import { ApiReturnPosts } from '../@types/types';

export async function get(page: number, maxDate: number, token?: string) {
  if (!token) throw new Error('Token not provider');

  const { data } = await api.get(`posts?page=${page}&maxDate=${maxDate}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data as ApiReturnPosts;
}
