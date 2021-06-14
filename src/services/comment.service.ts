import api from './api';

import { ApiReturnComments, ApiReturnNewComment } from '../@types/types';

class CommentService {
  private readonly postId: number;
  private readonly token: string | undefined;

  constructor(postId: number, token?: string) {
    this.postId = postId;
    this.token = token;
  }

  get = async (page: number, fatherId: number | null) => {
    const { data } = await api.get(
      `comments/${this.postId}${fatherId ? `/${fatherId}` : ''}?page=${page}`,
    );

    return data as ApiReturnComments;
  };

  newComment = async (content: string, fatherId: number | null) => {
    const jsonData = JSON.parse(
      JSON.stringify({ content, fatherId: fatherId || undefined }),
    );

    const { data } = await api.post(`comments/${this.postId}`, jsonData, {
      headers: { Authorization: `Bearer ${this.token}` },
    });

    return data as ApiReturnNewComment;
  };
}

export default CommentService;
