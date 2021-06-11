import api from './api';

class LikePostService {
  private readonly id: number;
  private readonly token: string | undefined;

  constructor(id: number, token?: string) {
    this.id = id;
    this.token = token;
  }

  add = async () => {
    await api.post(`/reactions/${this.id}`, undefined, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  };

  remove = async () => {
    await api.delete(`/reactions/${this.id}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  };
}

export default LikePostService;
