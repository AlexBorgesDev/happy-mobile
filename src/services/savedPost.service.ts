import api from './api';

import { ApiReturnPosts } from '../@types/types';

class SavedPostService {
  private readonly id: number | undefined;
  private readonly token: string | undefined;

  constructor(id?: number, token?: string) {
    this.id = id;
    this.token = token;
  }

  get = async (page: number) => {
    const { data } = await api.get(`saved/posts?page=${page}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    return data as ApiReturnPosts;
  };

  add = async () => {
    await api.post(`saved/posts/${this.id}`, undefined, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  };

  remove = async () => {
    await api.delete(`saved/posts/${this.id}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  };
}

export default SavedPostService;
