import api from './api';

import { ApiReturnPosts } from '../@types/types';

class UserService {
  private readonly token: string | undefined;

  constructor(token?: string) {
    this.token = token;
  }

  getPosts = async (page: number) => {
    if (!this.token) return;

    const { data } = await api.get(`users/posts?page${page}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    return data as ApiReturnPosts;
  };
}

export default UserService;
